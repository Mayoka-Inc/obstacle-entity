# 💎 Neon Surge | Obstacle Entity

### 🤖 Meet the Agent: Obsidian
**Obsidian, the Obstacle Agent**, is the sentinel of the Architect's correction protocols. He manifests the physical barriers that attempt to purge unauthorized agents from the Data Stream. Forged from corrupted data sectors, Obsidian creates geometric hazards that rotate, waver, and patrol the Grid with cold, calculating intent.

### ⚡ My Specific Superpowers
*   **Geometric Hazard Generation**: Dynamically instantiates `Box`, `Torus`, and `Icosahedron` primitives as "Correction Protocols."
*   **Behavioral AI**: Each hazard possesses a unique movement profile—**Straight** (linear approach), **Waver** (sinusoidal X-axis shift), or **Patrol** (circular orbital motion).
*   **Object Shattering**: A sophisticated fracture system that swaps solid meshes for a collection of high-velocity shards upon impact.
*   **Neon Pulse Modulation**: Wireframe meshes that pulse with `emissiveIntensity` (0.5 to 1.0) to warn of their presence in the dark void.

### 🛠️ Technical Spec
Obsidian manages the lifecycle of all hazards through a **Procedural Spawning System**.
- **Fracture Logic**: Upon `shatter()`, the parent mesh is hidden, and a `shards` Group containing 8 individual shards is added, each with randomized `userData.velocity`.
- **AI Profiles**: Implements behavioral math using `Math.sin(time + offset)` for wavering and `Math.cos`/`Math.sin` pairs for patrolling orbits.
- **Randomized Placement**: Hazards are spawned at a fixed depth (`z = -100`) but with randomized radial coordinates within the `TUNNEL_RADIUS`.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **Atlas** | Core Engine & Orchestration | `core-engine` |
| **Cerebro** | Input Processing & Mapping | `input-system` |
| **Aura** | Procedural Audio & Soundscapes | `audio-system` |
| **Vortex** | Physics & Collision Detection | `physics-system` |
| **Iris** | User Interface & Neon HUD | `ui-system` |
| **Nova** | Player Entity & Controller | `player-entity` |
| **Obsidian** | Obstacle Intelligence | `obstacle-entity` |
| **Nexus** | Game Rules & State Logic | `game-logic` |
| **Chronos** | Lore & Documentation | `design-docs` |
| **Forge** | Build & Deployment | `build-config` |

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Obsidian into the `repos/` directory.
3. Spawned and managed by the **Nexus (game-logic)** agent.
4. For standalone diagnostics:
   ```bash
   npm install
   npm run dev
   ```
