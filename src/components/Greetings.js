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
      <div className="item">
     {greeting}&nbsp;
          {children}
      </div>
    );
  }
  export default Greetings;