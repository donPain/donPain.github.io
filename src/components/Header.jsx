export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 text-sm">
      <h1 className="text-xl font-bold">donPain.dev</h1>
      <nav className="space-x-6">
        <a href="https://github.com/donPain" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/eduardodonzelipaino/" target="_blank">LinkedIn</a>
        <a href="https://medium.com/@2l/apache-flink-kafka-real-time-processing-and-store-in-postgresql-87b2d2238023" target="_blank">Medium</a>
        <a href="mailto:eduardo.donzeli@gmail.com">Contact</a>
      </nav>
    </header>
  )
}
