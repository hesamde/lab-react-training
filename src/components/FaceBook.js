import React, { useState } from 'react';
import profilesData from '../data/berlin.json';

const FaceBook = () => {
    const [profileList, setProfileList] = useState(profilesData);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const selectCountry = (country) => {
        setSelectedCountry(country);
    };

    const studentsProfile = profilesData.filter((student) => student.isStudent);
    const countriesOfStudents = Array.from(new Set(studentsProfile.map((student) => student.country)));

    const getSorting = (value) => {
        const copy = [...profileList];
        if (value === 'alphabeticalAscending') {
        copy.sort((a, b) => a.lastName.localeCompare(b.lastName));
        } else if (value === 'alphabeticalDescending') {
        copy.sort((a, b) => b.lastName.localeCompare(a.lastName));
        }
        setProfileList(copy);
    };

    return (
        <div>
            <button
            onClick={() => {
            setProfileList(profilesData);
            setSelectedCountry(null);}}>All
            </button>

        {countriesOfStudents.map((country) => (
            <button key={country} onClick={() => selectCountry(country)}>{country}</button>
        ))}

        <div>
            <label htmlFor="profile-sort">Sort: </label>
            <select onChange={(event) => getSorting(event.target.value)} name="profile" id="profile-sort">
            <option value="default">Default</option>
            <option value="alphabeticalAscending">Name: A-Z</option>
            <option value="alphabeticalDescending">Name: Z-A</option>
            </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {profileList.map((profile) => (
            <div
                key={profile.firstName + profile.lastName}
                className="card col-3"style={{backgroundColor: profile.country === selectedCountry ? 'lightblue' : 'white',border: 'solid',}}>
                <img className="head-shot" src={profile.img} alt="" />
                <div className="card-content">
                <p>
                    <span>First name: </span>{profile.firstName}
                </p>
                <p>
                    <span>Last name: </span>{profile.lastName}
                </p>
                <p>
                    <span>Country: </span>{profile.country}
                </p>
                <p>
                    <span>Type: </span>{profile.isStudent ? 'Student' : 'Teacher'}
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

export default FaceBook;
