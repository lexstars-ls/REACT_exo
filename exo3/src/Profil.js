function Profil() {
    const profile = {
      firstname: "ton prénom",
      lastname: "ton nom",
    };
  
    return (
      <li>
        {profile.firstname} {profile.lastname}
      </li>
    );
  }
  
  export default Profil;