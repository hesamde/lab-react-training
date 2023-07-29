 function Greetings ({ children, lang }) {
    let greeting;
    switch (lang) {
      case 'de':
        greeting = 'Guten Tag';break;
      case 'en':
        greeting = 'Hello';break;
      case 'es':
        greeting = 'Ola';break;
      case 'fr':
        greeting = 'Bonjour';break;
      default:
    }

    return (
      <div className="box-with-text">
        <p>
          {greeting}&nbsp;
          {children}
        </p>
      </div>
    );
  }
  export default Greetings;