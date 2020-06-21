import { Response, Request } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

@controller("/auth")
class LoginController {
  // @ts-ignore
  @get("/login")
  getLogin(req: Request, res: Response): void {
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
  }
  // @ts-ignore
  @post("/login")
  //@ts-ignore
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };

      res.redirect("/");
    } else {
      res.send("GET OUT OF HERE! WRONG EMAIL & PASSWORD");
    }
  }
  // @ts-ignore
  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
//hi
