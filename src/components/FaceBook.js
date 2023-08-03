import profiles from './../data/berlin.json';

    function FaceBook() {
    return (
        <div class="facebook grid">{profiles.map((profile, i) => (

            <article className='design-f'>
            <img src={profile.img} alt={(profile.firstName, profile.lastName)}width="200" height="200"/>
            <p>
                <strong>First name:</strong> {profile.firstName}<br />
                <strong>Lasy name:</strong> {profile.lastName}<br />
                <strong>Country:</strong> {profile.country}<br />
                <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
            </article>
        ))}
        </div>
    );
    }

export default FaceBook;