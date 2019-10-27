import { Router, Response, Request } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
    res.send(`
    <form method="Post">
      <div>
        <label>email</label>
        <input name="email"></input>
        <div>
          <label>Password</label>
          <input name="password" type="password"></input>
        </div>
        <button>Submit</button>
      </div>
    </form>`);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
    } else {
        res.send('GET OUT OF HERE! WRONG EMAIL & PASSWORD');
    }
});

export { router };
