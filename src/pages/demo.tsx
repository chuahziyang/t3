import ViewWrapper from "../components/ViewWrapper";
import SocialIcons from "../components/SocialIcons";
const summary = "Software Engineer, Rocket Scientist, and Musician";

const description = `I'm a software engineer with a passion for building things that are useful and fun. I'm currently working at a startup in the Bay Area, and I'm always looking for new opportunities. Feel free to reach out to me at any time!`;

const Index = () => {
  return (
    <ViewWrapper flex={false}>
      <div className="min-h-screen bg-zinc-800">
        <div className="block text-5xl font-bold tracking-tight text-white">
          {summary}
        </div>
        <div className="text-white">{description}</div>
        <SocialIcons></SocialIcons>
      </div>
    </ViewWrapper>
  );
};
export default Index;
