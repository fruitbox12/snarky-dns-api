import { Router } from 'express';
import ProofController from '../controllers/proofController';

const router = Router();
const proofController = new ProofController();

router.post('/proof', async (req, res) => {
  try {
    const proof = await proofController.generateProof(req, res);
    res.json({ proof });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while generating the proof.' });
  }
});

export default router;
