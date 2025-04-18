
import { Target, Eye, Diamond, Hash, Layers, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "AIMBOT",
      description: "Smart Aim, Auto Scope, Randomization for server-side checks. Auto wallbang, Advanced options for legit aimbot. Smart visual checks. Advanced RCS system."
    },
    {
      icon: <Eye className="w-12 h-12 text-blue-500" />,
      title: "VISUALS",
      description: "Glow, Boxes, Snaplines, Money, Health, Equipment, Radar revealer, Footsteps."
    },
    {
      icon: <Diamond className="w-12 h-12 text-blue-500" />,
      title: "SKIN CHANGER",
      description: "Inventory changer, Skinchanger, Model changer, Medal changer, Lobby changer. Advanced skin system."
    },
    {
      icon: <Hash className="w-12 h-12 text-blue-500" />,
      title: "MISC",
      description: "SteM, Fake lag, Custom clan tag, Custom crosshair, Sound Sonar for league, Visual changes."
    },
    {
      icon: <Layers className="w-12 h-12 text-blue-500" />,
      title: "CHAMS",
      description: "Chams for players, OBS bypass, Nightmod, Minecraft mod and grey mod, Elite and Diffs. Chams for your hands and weapons."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "SECURITY",
      description: "Can bypass the following anti-cheats: Matchmaking, VAC, ChallengeMeAnti, Zengaming.com, Faceit (server-side), Challengermode.com, WeplayTv."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <header className="py-4 px-4 bg-[#0A1627] border-b border-blue-900/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 font-bold text-2xl">F</span>
            <h1 className="text-xl font-bold">LIGHT-RADAR.cc</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="text-white">OUR </span>
          <span className="text-blue-500">FEATURES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#0A1627] p-8 rounded-lg border border-blue-900/30 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Features;
