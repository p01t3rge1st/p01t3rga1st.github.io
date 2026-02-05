// Wilson Cloud Chamber Effect
// Cursor acts as radioactive source emitting particle tracks

(function() {
    console.log('Wilson Chamber: Script loaded');
    
    // Wait for DOM to be ready
    function init() {
        console.log('Wilson Chamber: Init called');
        const chamber = document.querySelector('.wilson-chamber');
        
        if (!chamber) {
            console.log('Wilson Chamber: No chamber found, retrying...');
            setTimeout(init, 100);
            return;
        }
        
        console.log('Wilson Chamber: Chamber found!', chamber);

        // Configuration
        const config = {
            emissionRate: 200,      // ms between emissions (increased = less frequent)
            maxParticles: 30,       // max particles on screen
            trackLifetime: 1500,    // how long track lives (ms) - shorter = disappears faster
            drawDuration: 100,      // how long to draw the track (ms)
            
            // Fade out behavior
            fadeDirection: { x: 0, y: 1 },  // Direction all particles fade/move (0,-1 = up) - can be changed to (0,1) for down, (1,0) for right, etc
            fadeSpeed: 100,          // pixels per second during fade
            fadeStartProgress: 0.3,  // when fade starts (0.3 = at 30% of movement)
            
            // Particle types with probabilities
            particles: {
                beta: { probability: 0.6, length: [80, 180], thickness: 2, color: 'rgba(180,200,255,0.3)', blur: 1, curved: true },
                alpha: { probability: 0.25, length: [40, 80], thickness: 4, color: 'rgba(180,200,255,0.3)', blur: 1, curved: true },
                gamma: { probability: 0.15, length: [200, 400], thickness: 2, color: 'rgba(100,180,255,0.4)', blur: 1, curved: false }
            }
        };

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let particles = [];
        let lastEmission = 0;

        // Track mouse position - use pageX/pageY for absolute position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        // Choose particle type based on probability
        function chooseParticleType() {
            const rand = Math.random();
            let cumulative = 0;
            
            for (const [type, props] of Object.entries(config.particles)) {
                cumulative += props.probability;
                if (rand <= cumulative) return { type, ...props };
            }
            return { type: 'beta', ...config.particles.beta };
        }

        // Create a particle track
        function createParticle() {
            if (particles.length >= config.maxParticles) return;

            const particle = chooseParticleType();
            const angle = Math.random() * Math.PI * 2; // Random direction
            const length = particle.length[0] + Math.random() * (particle.length[1] - particle.length[0]);
            
            // Position at cursor (use scroll offset for fixed positioning)
            const posX = mouseX - window.scrollX;
            const posY = mouseY - window.scrollY;
            
            // Curve parameters for alpha/beta
            const curveDirection = Math.random() > 0.5 ? 1 : -1;
            const curveAmount = particle.curved ? (20 + Math.random() * 30) * curveDirection : 0;
            
            // Create SVG for curved tracks, div for straight
            let track;
            
            if (particle.curved) {
                // SVG for curved path
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('width', length + 50);
                svg.setAttribute('height', Math.abs(curveAmount) * 2 + particle.thickness * 2);
                svg.style.position = 'fixed';
                svg.style.left = posX + 'px';
                svg.style.top = (posY - Math.abs(curveAmount) - particle.thickness) + 'px';
                svg.style.overflow = 'visible';
                svg.style.pointerEvents = 'none';
                svg.style.transform = `rotate(${angle}rad)`;
                svg.style.transformOrigin = `0px ${Math.abs(curveAmount) + particle.thickness}px`;
                
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                const midY = Math.abs(curveAmount) + particle.thickness;
                // Quadratic bezier curve
                const d = `M 0 ${midY} Q ${length/2} ${midY + curveAmount} ${length} ${midY}`;
                path.setAttribute('d', d);
                path.setAttribute('stroke', particle.color);
                path.setAttribute('stroke-width', particle.thickness);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke-linecap', 'round');
                
                // For drawing animation
                const pathLength = path.getTotalLength ? length * 1.2 : length;
                path.style.strokeDasharray = pathLength;
                path.style.strokeDashoffset = pathLength;
                path.style.filter = `blur(${particle.blur}px)`;
                
                if (particle.type === 'alpha') {
                    path.style.filter = `blur(${particle.blur}px) drop-shadow(0 0 4px rgba(255,180,100,0.4))`;
                }
                
                svg.appendChild(path);
                track = svg;
                track._path = path;
                track._pathLength = pathLength;
            } else {
                // Simple div for straight gamma rays
                track = document.createElement('div');
                track.className = `track track-${particle.type}`;
                track.style.position = 'fixed';
                track.style.left = posX + 'px';
                track.style.top = posY + 'px';
                track.style.width = '0px';
                track.style.height = particle.thickness + 'px';
                track.style.transform = `rotate(${angle}rad)`;
                track.style.transformOrigin = '0 50%';
                track.style.background = `linear-gradient(90deg, 
                    ${particle.color} 0%, 
                    ${particle.color.replace(/[\d.]+\)$/, '0.4)')} 70%, 
                    rgba(255,255,255,0) 100%)`;
                track.style.filter = `blur(${particle.blur}px)`;
                track.style.borderRadius = '2px';
                track.style.pointerEvents = 'none';
                track.style.boxShadow = '0 0 10px rgba(100,180,255,0.5)';
            }

            chamber.appendChild(track);

            // Create radiation symbol (will be positioned at track end)
            const symbols = { alpha: 'α', beta: 'β', gamma: 'γ' };
            const symbolColors = { alpha: '#ff6644', beta: '#66aaff', gamma: '#88ddff' };
            
            const symbol = document.createElement('span');
            symbol.textContent = symbols[particle.type];
            symbol.style.position = 'fixed';
            symbol.style.fontFamily = 'serif';
            symbol.style.fontSize = particle.type === 'gamma' ? '16px' : '14px';
            symbol.style.fontWeight = 'bold';
            symbol.style.color = symbolColors[particle.type];
            symbol.style.textShadow = `0 0 8px ${symbolColors[particle.type]}, 0 0 15px ${symbolColors[particle.type]}`;
            symbol.style.pointerEvents = 'none';
            symbol.style.zIndex = '10';
            symbol.style.transform = 'translate(-50%, -50%)';
            symbol.style.opacity = '0';
            chamber.appendChild(symbol);
            
            // Calculate end position of track
            const endX = posX + Math.cos(angle) * length;
            const endY = posY + Math.sin(angle) * length;

            // Animation data
            const particleData = {
                element: track,
                symbol: symbol,
                symbolEndX: endX,
                symbolEndY: endY,
                startTime: performance.now(),
                length: length,
                angle: angle,
                startX: posX,
                startY: particle.curved ? (posY - Math.abs(curveAmount) - particle.thickness) : posY,
                phase: 'drawing',
                type: particle.type,
                curved: particle.curved
            };

            particles.push(particleData);
        }

        // Animate particles
        function animate(currentTime) {
            // Emit new particles
            if (currentTime - lastEmission > config.emissionRate) {
                if (Math.random() < 0.4) {  // Reduced from 0.7 to 0.4
                    createParticle();
                }
                lastEmission = currentTime;
            }

            // Update existing particles
            particles = particles.filter(p => {
                const elapsed = currentTime - p.startTime;
                
                if (p.phase === 'drawing') {
                    const drawProgress = Math.min(elapsed / config.drawDuration, 1);
                    const easedProgress = 1 - Math.pow(1 - drawProgress, 3);
                    
                    if (p.curved && p.element._path) {
                        // Animate SVG path drawing
                        const offset = p.element._pathLength * (1 - easedProgress);
                        p.element._path.style.strokeDashoffset = offset;
                    } else {
                        // Animate div width
                        p.element.style.width = (p.length * easedProgress) + 'px';
                    }
                    
                    if (drawProgress >= 1) {
                        p.phase = 'fading';
                        p.fadeStartTime = currentTime;
                        // Save current position as starting point for fade movement
                        p.fadeStartX = parseFloat(p.element.style.left);
                        p.fadeStartY = parseFloat(p.element.style.top);
                        
                        // Show symbol at track end
                        if (p.symbol) {
                            p.symbol.style.left = p.symbolEndX + 'px';
                            p.symbol.style.top = p.symbolEndY + 'px';
                            p.symbol.style.opacity = '1';
                        }
                    }
                } 
                else if (p.phase === 'fading') {
                    // After drawing, just drift in wind direction and fade out
                    const fadeElapsed = currentTime - p.fadeStartTime;
                    const fadeDuration = config.trackLifetime - config.drawDuration;
                    const fadeProgress = Math.min(fadeElapsed / fadeDuration, 1);
                    
                    // Move in wind direction only (same for all particles)
                    const driftDistance = fadeProgress * config.fadeSpeed * (fadeDuration / 1000);
                    const newX = p.fadeStartX + config.fadeDirection.x * driftDistance;
                    const newY = p.fadeStartY + config.fadeDirection.y * driftDistance;
                    
                    p.element.style.left = newX + 'px';
                    p.element.style.top = newY + 'px';
                    p.element.style.opacity = 1 - fadeProgress;
                    
                    // Move and fade symbol too (from track end position)
                    if (p.symbol) {
                        const symbolNewX = p.symbolEndX + config.fadeDirection.x * driftDistance;
                        const symbolNewY = p.symbolEndY + config.fadeDirection.y * driftDistance;
                        p.symbol.style.left = symbolNewX + 'px';
                        p.symbol.style.top = symbolNewY + 'px';
                        p.symbol.style.opacity = 1 - fadeProgress;
                    }
                    
                    if (fadeProgress >= 1) {
                        p.element.remove();
                        if (p.symbol) p.symbol.remove();
                        return false;
                    }
                }
                
                return true;
            });

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);

        setInterval(() => {
            if (Math.random() < 0.2) {  // Reduced from 0.5 to 0.2
                createParticle();
            }
        }, 1000);  // Increased from 200ms to 1000ms
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
