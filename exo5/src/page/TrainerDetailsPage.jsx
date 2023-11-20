import { useParams } from "react-router-dom";
import Header from "../component/Header";

function TrainerDetailsPage() {
  const trainers = [
    {
      id: 1,
      name: "Sasha du Bourg Palette",
      bio: "jveux tous les attraper",
    },
    {
      id: 2,
      name: "Dwayne Johnson",
      bio: "jveux tous les soulever",
    },
    {
      id: 3,
      name: "Affida Turner",
      bio: "je veux décéder",
    },
  ];

  const { id } = useParams();

  const trainerFound = trainers.find((trainer) => {
    return trainer.id == id;
  });

  return (
    <>
      <Header />
      <main>
        <h1>{trainerFound.name}</h1>
        <p>{trainerFound.bio}</p>
      </main>
    </>
  );
}

export default TrainerDetailsPage;