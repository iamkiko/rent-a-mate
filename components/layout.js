import Link from "next/link";
import Head from "next/head";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { NavLink } from "../components/styles";

export default function Layout({ children, title = "Rent a mate." }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/" passHref>
            <NavLink>
              <KeyboardArrowLeft />
              Home
            </NavLink>
          </Link>{" "}
        </nav>
      </header>

      {children}

      <footer></footer>
    </div>
  );
}
