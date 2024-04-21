import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import "../css/personDetailsPage.css";

function PersonDetailsPage() {
  const { personId } = useParams();
  const [data, setData] = useState([]);
  const [dataLink, setDataLink] = useState({
    instagram_id: "",
    tiktok_id: "",
    twitter_id: "",
    facebook_id: "",
  });
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE2ZDRhZGMxMmIyZjhiYmE3OWI3OWVjODIyZWRjZCIsInN1YiI6IjY0NjhkMTBiMzNhMzc2MDEzYjNkZjk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F60GxDSi1b41yQ_1yFJpzFT-C_h58Kq6kVW_ItU7Oec",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/person/${personId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/person/${personId}/external_ids`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDataLink(response))
      .catch((err) => console.error(err));
  }, [personId]);
  return (
    <div className="person container">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
          alt="..."
        />
        <div>
          <div className="social-info">
            {dataLink.facebook_id !== null &&
              dataLink.facebook_id.length > 0 && (
                <a
                  href={`https://www.facebook.com/${dataLink.facebook_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook facebook"></i>
                </a>
              )}
            {dataLink.instagram_id !== null &&
              dataLink.instagram_id.length > 0 && (
                <a
                  href={`https://www.instgram.com/${dataLink.instagram_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram instagram"></i>
                </a>
              )}
            {dataLink.twitter_id !== null && dataLink.twitter_id.length > 0 && (
              <a
                href={`https://www.twitter.com/${dataLink.twitter_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter twitter"></i>
              </a>
            )}
            {dataLink.tiktok_id !== null && dataLink.tiktok_id.length > 0 && (
              <a
                href={`https://www.tiktok.com/${dataLink.tiktok_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            )}
          </div>
          <div className="personal-info">
            <h2>Personal Info</h2>
            <div>
              <h3>name</h3>
              <p>{data.name}</p>
            </div>
            <div>
              <h3>Known For</h3>
              <p>{data.known_for_department}</p>
            </div>
            <div>
              <h3>Gender</h3>
              <p>
                {data.gender === 0
                  ? "Not set / not specified"
                  : data.gender === 1
                  ? "Female"
                  : data.gender === 2
                  ? "Male"
                  : "Non-binary"}
              </p>
            </div>
            <div>
              <h3>Birthday</h3>
              <p>{data.birthday}</p>
            </div>
            <div>
              <h3>Place of Birth</h3>
              <p>{data.place_of_birth}</p>
            </div>
            <div>
              <h3>Also Known As</h3>

              {data.id > 0 &&
                data.also_known_as.map((item, index) => (
                  <p key={index + 1}>{item}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>{data.name}</h1>
        <div className="biography">
          <h2>Biography</h2>
          <p>{data.biography}</p>
        </div>
        <Wrapper
          title="Known for"
          initialApi={`https://api.themoviedb.org/3/person/${personId}/combined_credits?language=en-US`}
          circularActive={true}
          selectedtime={false}
        />
      </div>
    </div>
  );
}

export default PersonDetailsPage;
