
# LaunchX - Setup and Run Instructions

## Prerequisites

- Install [Node.js](https://nodejs.org/)
    Node.js (v16+)
    npm or yarn

## Steps to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/OuluES-Development-Team/LaunchX.git
   cd LaunchX
   ```
2. **Install the dependencies**:

   ```bash
   npm install
   ```
3. Configure Tailwind CSS <br>
    Ensure your vite.config.js file has the following configuration:

    ```Javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'

    // https://vite.dev/config/
    export default defineConfig({
    plugins: [react(), tailwindcss()]
    })
    ```
5. Ensure your index.css has the proper Tailwind directives:

    @import 'tailwindcss'; <br>

6. Start the development server:

   ```bash
   npm run dev
   ``` 
