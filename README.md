<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&pause=1000&color=7aa2f7&center=true&vCenter=true&width=600&lines=Obsidian:+Manifesting+Correction+Protocols...;Forging+Geometric+Hazards...;Neon+Surge+Obsidian+Active." alt="Typing SVG" />
</div>

# 💎 Neon Surge | Obstacle Entity

### 📊 Agent Telemetry
<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=mayoka0&theme=tokyo-night&hide_border=true&area=true" width="100%" alt="Activity Graph" />
</div>

### 🤖 Meet the Agent: Obsidian
**Obsidian, the Obstacle Agent**, is the sentinel of the Architect's correction protocols. He manifests the physical barriers that attempt to purge unauthorized agents from the Data Stream. Forged from corrupted data sectors, Obsidian creates geometric hazards that rotate, waver, and patrol the Grid with cold, calculating intent.

### ⚡ My Specific Superpowers
*   **Geometric Hazard Generation**: Dynamically instantiates `Box`, `Torus`, and `Icosahedron` primitives as "Correction Protocols."
*   **Behavioral AI**: Each hazard possesses a unique movement profile—**Straight** (linear approach), **Waver** (sinusoidal X-axis shift), or **Patrol** (circular orbital motion).
*   **Object Shattering**: A sophisticated fracture system that swaps solid meshes for a collection of high-velocity shards upon impact.
*   **Neon Pulse Modulation**: Wireframe meshes that pulse with `emissiveIntensity` (0.5 to 1.0) to warn of their presence in the dark void.

### 🛠️ Technical Spec
Obsidian manages the lifecycle of all hazards through a sophisticated **Procedural Spawning System** designed to keep the Data Stream unpredictable. Hazards are dynamically instantiated at a fixed depth (`z = -100`) and assigned randomized radial coordinates within the `TUNNEL_RADIUS`. Each hazard is then injected with a specific behavioral profile—**Straight**, **Waver**, or **Patrol**. These profiles utilize trigonometric functions, such as `Math.sin(time + offset)` for oscillatory movement and `Math.cos`/`Math.sin` pairs for orbital patrolling, ensuring that every traversal of the Grid presents a unique challenge.

When a collision occurs, Obsidian triggers a high-impact **Object Shattering** routine. This system instantly hides the parent mesh and replaces it with a `shards` Group containing eight individual geometric fragments. Each shard is assigned a randomized `userData.velocity` vector, creating an explosion of data that visually represents the destruction of a "Correction Protocol." Furthermore, the wireframe meshes of all active hazards pulse with a modulated `emissiveIntensity` (ranging from 0.5 to 1.0), serving as a visual warning system for the player as they navigate the dark void of the Grid.

🔗 **Part of the [Neon Surge Ecosystem](https://github.com/mayoka0/mayoka0#-neon-surge-architecture)**

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Obsidian into the `repos/` directory.
3. Spawned and managed by the **Nexus (game-logic)** agent.
4. For standalone diagnostics:
   ```bash
   npm install
   npm run dev
   ```
