import React from "react";
import {
  Sparkles,
  BookOpen,
  Camera,
  Map,
  Calendar,
  LayoutDashboard,
  Settings,
  Bell,
  GraduationCap,
} from "lucide-react";

// Mock Data for the Homeschool-Specific Agentic Tools
const toolSuites = [
  {
    title: "The Homeschool Architect",
    description:
      "Agents that design learning paths across multiple ages and state requirements.",
    tools: [
      {
        id: 1,
        name: "Multi-Grade Mixer",
        icon: "🎨",
        status: "Ready",
        description:
          "Input one topic; get differentiated activities for all your kids' grade levels.",
      },
      {
        id: 2,
        name: "Unit Study Spark",
        icon: "💡",
        status: "Ready",
        description:
          "Turn any interest (like 'space' or 'baking') into a 4-week integrated curriculum.",
      },
      {
        id: 3,
        name: "Compliance Companion",
        icon: "⚖️",
        status: "Ready",
        description:
          "Maps your activities to state standards to ensure you're meeting requirements.",
      },
    ],
  },
  {
    title: "Daily Flow & Documentation",
    description: "Capture learning as it happens in real life.",
    tools: [
      {
        id: 4,
        name: "Life-to-Lesson Logger",
        icon: "🛒",
        status: "Ready",
        description:
          "Turn a grocery trip or garden work into a formal 'Educational Activity' log entry.",
      },
      {
        id: 5,
        name: "Portfolio Pilot",
        icon: "📸",
        status: "Ready",
        description:
          "Upload a photo of a project; AI writes the pedagogical 'why' for your year-end review.",
      },
      {
        id: 6,
        name: "Reading Tracker",
        icon: "📚",
        status: "Ready",
        description:
          "Scan a book cover to log hours, reading level, and generate a quick comprehension quiz.",
      },
    ],
  },
  {
    title: "Future & Community",
    description: "Tools for long-term success and social learning.",
    tools: [
      {
        id: 7,
        name: "Transcript Transformer",
        icon: "🎓",
        status: "Ready",
        description:
          "Convert years of informal interest-led learning into a professional high school transcript.",
      },
      {
        id: 8,
        name: "Field Trip Finder",
        icon: "📍",
        status: "Ready",
        description:
          "Scans local events to find learning opportunities that match your current unit study.",
      },
      {
        id: 9,
        name: "Co-op Coordinator",
        icon: "🤝",
        status: "Ready",
        description:
          "Draft plans and communications for your local homeschool group or co-op day.",
      },
    ],
  },
];

export default function HomeschoolDashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 lg:block">
        <div className="flex items-center gap-2 mb-10">
          <div className="rounded-lg bg-indigo-600 p-1.5 text-white">
            <GraduationCap size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">HomeToolkit</span>
        </div>

        <nav className="space-y-1">
          <NavItem
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            active
          />
          <NavItem icon={<BookOpen size={18} />} label="Unit Studies" />
          <NavItem icon={<Camera size={18} />} label="Portfolios" />
          <NavItem icon={<Calendar size={18} />} label="Daily Log" />
          <NavItem icon={<Map size={18} />} label="Field Trips" />
          <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800">
            <NavItem icon={<Settings size={18} />} label="Settings" />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-sm font-medium text-zinc-500 italic">
            "The world is our classroom."
          </h2>
          <div className="flex items-center gap-4">
            <button className="text-zinc-500 hover:text-zinc-900">
              <Bell size={20} />
            </button>
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs border border-indigo-200">
              ST
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Homeschool Command Center
              </h1>
              <p className="text-zinc-500">
                Documenting the journey of Sarah, Leo, and Mia.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-all shadow-sm">
              <Sparkles size={16} />
              Daily Check-in
            </button>
          </div>

          {/* Grid of Suites */}
          <div className="space-y-12 pb-12">
            {toolSuites.map((suite) => (
              <section key={suite.title}>
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    {suite.title}
                  </h2>
                  <p className="text-sm text-zinc-500">{suite.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {suite.tools.map((tool) => (
                    <div
                      key={tool.id}
                      className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                    >
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-2xl">{tool.icon}</span>
                        </div>
                        <h3 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                          {tool.name}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                      <button className="mt-4 w-full rounded-lg bg-zinc-50 py-2 text-sm font-medium text-zinc-900 hover:bg-indigo-600 hover:text-white transition-all dark:bg-zinc-800 dark:text-zinc-300">
                        Launch Agent
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400"
          : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200"
      }`}
    >
      {icon}
      {label}
    </a>
  );
}
