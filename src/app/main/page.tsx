
import NavBar from "./navBar/navBar";
import Caption from "@/components/tagComponents/caption/caption";
import CardSection from "./cardCursos/cardSection";

export default function Main() {
  return (
    <main className="min-h-screen flex flex-col m-8 gap-y-8 ">
      <NavBar />
      <Caption>
        Plataforma de Cursos
      </Caption>
      <CardSection />
    </main>
  )
}