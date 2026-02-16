import "./resume.css";

export function Resume() {
  return (
    <>
      <header>
        <span>Ashraf Khan</span>
        <nav>
          <a href="https://ashraf-portfolio-khan-pi-62.vercel.app" target="_blank">
            Personal portfolio
          </a>
          |<a href="mailto:ashrfkhn97@gmail.com">ashrfkhn97@gmail.com</a>|
          <a href="tel:+918318390165">+918318390165</a>
        </nav>
      </header>

      <section>
        <h1>Profile</h1>

        <p className="profile_p">
          Frontend Developer with hands-on experience building scalable React.js
          applications using Redux for state management and REST API
          integration.</p>
        <p className="profile_mid_p">Transitioned from a legal background (LLB, 2024) into
          frontend development, bringing strong analytical thinking and
          structured reasoning.</p> <p className="profile_last_p">Focused on performance, clean UI, and remote
          collaboration.
        </p>

        <h1>Top Projects</h1>

        <table>
          <tbody>
            <tr>
              <td class="entry">
                <a href="https://github.com/Ashraf-Mannan-Khan/reddit-client-app">Reddit Client Application </a>
              </td>
              <td nowrap="">
                <li>Reddit Clone app using json api to display json data.</li>
                <li>
                  Tech stack: React, Redux, JavaScript, Html and Css. 
                </li>
              </td>
            </tr>

            <tr>
              <td class="entry">
                <a href="https://github.com/ar5had/watchstock">Jamming</a>
              </td>
              <td nowrap="">
                <li className="jamming_li">The Jamming App is a React-based project that integrates with the Spotify API to allow users to search for songs, add them to a custom playlist, and save their playlists for viewing later.</li>
                <li>
                  Tech stack: React, Javascript, html and Css.
                </li>
              </td>
            </tr>

            <tr>
              <td class="entry">
                <a href="https://github.com/Ashraf-Mannan-Khan/flash-card">Flash Card</a>
              </td>
              <td nowrap="">
                <li>
                 A React-based quiz application that allows users to create topics, quizzes, and flashcards. 
                </li>
                <li>Tech stack: React, Redux Toolkit and React Router</li>
              </td>
            </tr>
          </tbody>
        </table>

        <h1>Education</h1>

        <table>
          <tbody>
            <tr>
              <td class="entry">
                2021 - 2024
                <br />
                LLB's degree
                <br />
               University of Allahabad, Prayagraj
              </td>
              <td>
                <li>Bachelor of Law</li>
                <li>
                  Trying to Transitioned to Tech Career.
                </li>
              </td>
            </tr>
          </tbody>
        </table>

        <h1>Certifications</h1>

        <table>
          <tbody>
            

            <tr>
              <td class="entry">
                <br />
                <a href="https://www.codecademy.com/profiles/AshrafMannankhan/certificates/2682884a0719474f96407efe432fdd87">
                  Front-end web development
                </a>
                <br />
                <a href="https://www.codecademy.com">Codeacademy</a>
              </td>
              <td>
                <li>Tech stack: React, Redux, Git, Github, JavaScript, Html and Css. </li>
              </td>
            </tr>

            <tr>
              <td class="entry">
                <br />
                <a href="https://www.codecademy.com/profiles/AshrafMannankhan/certificates/56fb1e71303e37b643bb1905f31c8a09n">
                 TypeScript
                </a>
                <br />
                <a href="https://www.codecademy.com/">Codeacademy</a>
              </td>
              <td>
                <li>
                  Tech stack:
                  TypeScript
                </li>
              </td>
            </tr>

            
          </tbody>
        </table>

        <h1>Languages</h1>

        <table>
          <tbody>
            <tr>
              <td class="entry">English, Hindi and Urdu</td>
              <td nowrap="">
                <li>Fluent (speaking, reading, and writing)</li>
              </td>
            </tr>
            <tr>
              <td class="entry">Danish</td>
              <td nowrap="">
                <li>Elementary Proficiency (speaking, reading, and writing)</li>
              </td>
            </tr>
          </tbody>
        </table>

        <h1>Interests</h1>

        <table>
          <tbody>
            <tr>
              <td class="entry">Hobbies</td>
              <td nowrap="">
                <li>Passionate about design, fashion, music, and philosophy</li>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
