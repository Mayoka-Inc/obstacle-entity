# 🚧 Neon Surge | Obstacle Entity

### 🤖 Meet the Agent: Grit
**Grit, the Obstacle Agent**, is the stoic, stubborn guardian of the path. Built to stand in your way, Grit is the ultimate test of a runner's skill. He doesn't just spawn walls; he designs geometric challenges that push the limits of reaction time, ensuring the Data Stream is never an easy ride.

### ⚡ Superpowers
*   **Procedural Spawning**: Intelligent placement of hazards to ensure every run is unique and progressively challenging.
*   **Variable Geometry**: Multiple obstacle types ranging from massive static monoliths to shifting, high-frequency data-walls.
*   **Advanced Object Pooling**: High-performance memory management for high-density hazard fields without frame drops.
*   **Collision Feedback**: Specialized event triggers that bridge the gap between Newton's laws and the player's experience.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **The Heart** | Core Engine & Orchestration | `core-engine` |
| **The Senses** | Input Processing & Mapping | `input-system` |
| **The Voice** | Procedural Audio & Soundscapes | `audio-system` |
| **The Laws** | Physics & Collision Detection | `physics-system` |
| **The Face** | User Interface & Neon HUD | `ui-system` |
| **The Hero** | Player Entity & Controller | `player-entity` |
| **The Hazard** | Obstacle Intelligence | `obstacle-entity` |
| **The Mastermind** | Game Rules & State Logic | `game-logic` |
| **The Blueprint** | Lore & Documentation | `design-docs` |
| **The Architect** | Build & Deployment | `build-config` |

### 🛠️ How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this agent into the `repos/` directory.
3. This agent is typically orchestrated by the [build-config](https://github.com/mayoka0/build-config) agent.
4. To run standalone tests:
   ```bash
   npm install
   npm run dev
   ```
