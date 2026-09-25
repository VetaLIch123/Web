function Projects() {
  return (
    <section>
      <h3>Projects:</h3>
      <p>
        <b>SecureAuth</b>, Secure user authentication and access-control system designed to 
        protect user accounts and sensitive data. Implemented password hashing with 
        SHA-512 and salting, account validation, access-control mechanisms, security
        logging, and protection against common authentication issues. 
        (Python, SHA-512, CSV, JSON, Git)
      </p>
      <p>
        <b>NetworkGuard</b>, Network security monitoring tool for analyzing network 
        connections and identifying potentially suspicious traffic. The project focuses 
        on TCP/IP fundamentals, connection analysis, IP/port monitoring, and basic 
        detection of anomalous network activity. (Python, TCP/IP, Socket, Linux)
      </p>
      <p>
        <b>SecurityLab</b>, Collection of cybersecurity utilities for password security 
        analysis, access-control verification, and security event logging. Includes 
        password strength assessment, forbidden-password detection, user clearance 
        verification, blocked-account handling, and structured security logs. 
        (Python, Git, JSON, CSV, Cryptography)
      </p>
    </section>
  );
}

export default Projects;