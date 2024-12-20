# CorvusGrimoire

**CorvusGrimoire** is a dark fantasy-inspired coding challenge platform where players encounter arcane puzzles generated by evolving AI models. Start simple, grow your skills, and delve into the secrets of code hidden in this digital grimoire.

## Features
- **Enchanted Coding Quests:** Engage in programming challenges presented in a thematic, magical setting.
- **AI-Driven Puzzles (Planned):** Future integration with local LLMs or open-source AI models to dynamically generate coding tasks.
- **Lean and Extensible:** Initial MVP runs locally in a Docker environment with minimal dependencies, ready to scale up.

## Getting Started
1. Clone the repository:  
  ```bash
   git clone https://github.com/t-9/CorvusGrimoire.git
  ```
2. Build and run with Docker:
  ```bash
   cd CorvusGrimoire
   docker build -t corvusgrimoire:latest .
   docker run -p 3000:3000 corvusgrimoire:latest
  ```
3. Access http://localhost:3000 in your browser to start your journey.

## Roadmap

- Introduce LLM-generated challenges.
- Add scoring and leveling systems.
- Improve UI/UX with a dark fantasy theme.
- Implement TDD with GitHub Actions integration.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.