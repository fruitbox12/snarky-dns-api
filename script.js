const fs = require('fs');
const path = require('path');

// Read the input message from the .md file
const inputMessage = fs.readFileSync('input.md', 'utf8');

// Create the project folder
const projectName = 'proof-generation-api'; // Change this to your desired project name
fs.mkdirSync(projectName);

// Create the src folder
const srcPath = path.join(projectName, 'src');
fs.mkdirSync(srcPath);

// Create the circuits folder
const circuitsPath = path.join(srcPath, 'circuits');
fs.mkdirSync(circuitsPath);

// Create the grothCircuit.ts file
const grothCircuitCode = `// Groth circuit implementation
class GrothCircuit {
  // Implement the circuit logic here
}

// Export the GrothCircuit class
export default GrothCircuit;
`;
fs.writeFileSync(path.join(circuitsPath, 'grothCircuit.ts'), grothCircuitCode);

// Create the api folder
const apiPath = path.join(srcPath, 'api');
fs.mkdirSync(apiPath);

// Create the controllers folder
const controllersPath = path.join(apiPath, 'controllers');
fs.mkdirSync(controllersPath);

// Create the proofController.ts file
const proofControllerCode = `import { Request, Response } from 'express';
import GrothCircuit from '../../circuits/grothCircuit';

// Proof controller implementation
class ProofController {
  generateProof(req: Request, res: Response): void {
    // Extract the required input parameters from the request body
    const { privateKey, publicKey, certificatePublicKey, dnsInformation, certificateDnsInformation } = req.body;

    // Instantiate the Groth circuit
    const circuit = new GrothCircuit();

    // Generate the proof using the circuit and the input parameters
    const proof = circuit.generateProof(privateKey, publicKey, certificatePublicKey, dnsInformation, certificateDnsInformation);

    // Return the proof as the response
    res.json({ proof });
  }
}

// Export the ProofController class
export default ProofController;
`;
fs.writeFileSync(path.join(controllersPath, 'proofController.ts'), proofControllerCode);

// Create the routes folder
const routesPath = path.join(apiPath, 'routes');
fs.mkdirSync(routesPath);

// Create the proofRoutes.ts file
const proofRoutesCode = `import { Router } from 'express';
import ProofController from '../controllers/proofController';

// Create the router
const router = Router();

// Create an instance of the ProofController
const proofController = new ProofController();

// Define the proof route
router.post('/proof', proofController.generateProof);

// Export the router
export default router;
`;
fs.writeFileSync(path.join(routesPath, 'proofRoutes.ts'), proofRoutesCode);

// Create the app.ts file
const appCode = `import express from 'express';
import proofRoutes from './api/routes/proofRoutes';

// Create an instance of the Express application
const app = express();

// Use JSON middleware
app.use(express.json());

// Register the proof routes
app.use('/', proofRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
`;
fs.writeFileSync(path.join(srcPath, 'app.ts'), appCode);

// Create the README.md file
const readmeContent = inputMessage;
fs.writeFileSync(path.join(projectName, 'README.md'), readmeContent);

// Create the package.json file
const packageJsonContent = `{
  "name": "${projectName}",
  "version": "1.0.0",
  "main": "dist/app.js",
  "scripts": {
    "start": "tsc && node dist/app.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "typescript": "^4.3.5"
  }
}
`;
fs.writeFileSync(path.join(projectName, 'package.json'), packageJsonContent);

// Create the tsconfig.json file
const tsconfigJsonContent = `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
`;
fs.writeFileSync(path.join(projectName, 'tsconfig.json'), tsconfigJsonContent);

console.log('Project files and folders created successfully!');
