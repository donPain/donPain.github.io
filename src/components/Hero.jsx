export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Eduardo Donzeli Paino</h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
        <a href="https://www.java.com" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Java</a>
        <a href="https://kafka.apache.org" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Kafka</a>
        <a href="https://flink.apache.org" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Flink</a>
        <a href="https://iceberg.apache.org" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Iceberg</a>
        <a href="https://pinot.apache.org" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Pinot</a>
        <a href="https://superset.apache.org" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Superset</a>
        <a href="https://trino.io" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Trino</a>
        <a href="https://www.snowflake.com" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Snowflake</a> <br></br>
        <a href="https://kubernetes.io" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">K8s</a>
        <a href="https://airflow.apache.org" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Airflow</a>
        <a href="https://spring.io/projects/spring-boot" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Spring-Boot</a>
        <a href="https://www.oracle.com/database/" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Oracle</a>
        <a href="https://www.postgresql.org" className="hover:text-white transition-colors duration-300 mx-2" target="_blank" rel="noopener noreferrer">Postgresql</a>
      </p>
    </section>
  );
}
