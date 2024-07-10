import NavBarItems from "./navBarItem"

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-evenly">
        <NavBarItems imgSource="https://img.icons8.com/pulsar-line/256/home.png">
          Home
        </NavBarItems>
        <NavBarItems imgSource="https://img.icons8.com/pastel-glyph/256/store.png">
          Loja
        </NavBarItems>
        <NavBarItems imgSource="https://img.icons8.com/material-outlined/256/video.png">
          Vídeos
        </NavBarItems>
      </ul>
    </nav>
  )
}