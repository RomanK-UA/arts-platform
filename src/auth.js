import { auth } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default async function handler(req, res) {
    const { method } = req;
    const { email, password } = req.body;

    try {
        if (method === "POST" && req.query.type === "signup") {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            res.status(200).json({ user: userCredential.user });
        } else if (method === "POST" && req.query.type === "signin") {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            res.status(200).json({ user: userCredential.user });
        } else if (method === "POST" && req.query.type === "signout") {
            await signOut(auth);
            res.status(200).json({ message: "Signed out successfully" });
        } else {
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}