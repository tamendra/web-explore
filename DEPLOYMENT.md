# Deploying React App to GitHub Pages

Follow these steps to deploy your React app to GitHub Pages:

1. **Install Dependencies**  
   Ensure the `gh-pages` package is installed. If not, run:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Configure `package.json`**  
   - Set the `homepage` field to:
     ```
     https://<username>.github.io/<repository-name>
     ```
   - Add the following scripts if not already present:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```

3. **Create a Production Build**  
   Build the app for production by running:
   ```bash
   npm run build
   ```

4. **Deploy the App**  
   Deploy the app to GitHub Pages by running:
   ```bash
   npm run deploy
   ```

5. **Verify Deployment**  
   Visit `https://tamendra.github.io/web-explore` to ensure your app is live and functioning correctly.
