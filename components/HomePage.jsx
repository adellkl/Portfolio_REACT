import React, { useCallback } from "react"

import Particles from "react-particles";
import { loadFull } from "tsparticles";

const HomePage = () => {
  const particlesInit = useCallback(async (engine) => {

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto  bg-white dark:bg-gray-900  ">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 150,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 6,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#696969",
              },
              links: {
                color: "#696969",
                distance: 129,
                enable: true,
                opacity: 1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2.08120772123013452,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 900,
                },
                value: 80,
              },
              opacity: {
                value: 3,
              },
              shape: {
                type: "edge",
                stroke: {
                  width: 3,
                  color: "#000000"
                }
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />


        {/*  Pour cette partie j'ai du mal a faire le reponsive pour tel  */}



      </div>



    </section>
  )
}

export default HomePage;