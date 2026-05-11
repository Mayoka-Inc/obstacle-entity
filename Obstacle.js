import * as THREE from 'three';

/**
 * Obstacle class representing hazards in the tunnel.
 */
export class Obstacle {
    /**
     * @param {number} z - Initial Z position of the obstacle
     */
    constructor(z = -100) {
        // Generate a random geometric mesh
        const type = Math.floor(Math.random() * 3);
        let geometry;
        
        switch (type) {
            case 0:
                geometry = new THREE.BoxGeometry(2, 2, 2);
                break;
            case 1:
                geometry = new THREE.TorusGeometry(3, 0.5, 16, 32);
                break;
            case 2:
            default:
                geometry = new THREE.IcosahedronGeometry(1.5, 0);
                break;
        }

        const material = new THREE.MeshStandardMaterial({
            color: 0xff00ff,
            emissive: 0xff00ff,
            emissiveIntensity: 1,
            wireframe: true
        });

        this.mesh = new THREE.Mesh(geometry, material);
        
        // Random position on the tunnel circle
        const TUNNEL_RADIUS = 10;
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * (TUNNEL_RADIUS - 2);
        
        this.mesh.position.set(
            Math.cos(angle) * r,
            Math.sin(angle) * r,
            z
        );
        
        // Random initial rotation
        this.mesh.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
    }

    /**
     * Updates the obstacle position and rotation.
     * @param {number} speed - The current game speed
     */
    update(speed) {
        // Move along the Z axis towards the player
        this.mesh.position.z += speed;
        
        // Add some rotation for visual interest
        this.mesh.rotation.x += 0.02;
        this.mesh.rotation.y += 0.02;
    }
}
