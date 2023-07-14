import { Request, Response } from 'express';
import GrothCircuit from '../../circuits/grothCircuit';

class ProofController {
  async generateProof(req: Request, res: Response): Promise<void> {
    try {
      const { privateKey, publicKey, certificatePublicKey, dnsInformation, certificateDnsInformation } = req.body;

      const circuit = new GrothCircuit();
      const proof = await circuit.generateProof(privateKey, publicKey, certificatePublicKey, dnsInformation, certificateDnsInformation);

      res.json({ proof });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while generating the proof.' });
    }
  }
}

export default ProofController;
