import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className="py-16 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-4xl font-bold mb-2 text-center md:text-left"
        >
          Work Experience
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-blue-500 mb-10 mx-auto md:mx-0"
        ></motion.div>
        {/* Work Experience Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center mr-4">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-xl text-white"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Frontend Developer</h3>
              <p className="text-sm text-gray-600">
                {" "}
                ALL MR Online Law Reporter{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-xl text-purple-600 mr-2"
            />
            <p className="text-sm text-gray-600">March 2024 - Present</p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-xl text-purple-600 ml-4 mr-2"
            />
            <p className="text-sm text-gray-600">Mumbai, Maharashtra</p>
          </div>
          {/* Nearlaw */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition mb-2"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex justify-center items-center mr-4">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxAQEBAPDw8PEA8QEBAPDw8NDxAPFREWFxURFRUYHiggGBolGxUVITEhJTUtLi4uFx8/ODQtOCgtLisBCgoKDg0OGhAQGi0dHx8rLS0vLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0uLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBgcFAwj/xABJEAABAwICBQcJBQYEBQUAAAABAAIDBBESIQUGEzFBByJRYXGBkTJCUlRykqGx0hYXI8HRU2KCo+HwFDNDkxVEc7KzJDRkdKL/xAAbAQACAwEBAQAAAAAAAAAAAAAAAwIEBQEGB//EADQRAAIBAgMFBgUEAwEBAAAAAAABAgMRBBIhBRMxQVEUUmFxsdEVgaHB8CIyYpFC4fEzI//aAAwDAQACEQMRAD8A29AAgAQBxtaNY4aCHHJzpHXEUINnyOHyaOJ4dpALqFCVaVl/ZxuxiOsWkKqplE1VjDpW44gQ5rBCSQNmD5twc+NuK9Fh4U6ccsOXHz8SrO7d2ckqwJkhpC6KcTQOT/Ud0rmVNS0tY0h0cbhYkjMPcPkPFY+Ox/GnTfm/svcsUMP/AJS/o14LGLwqABAAgAQAIAEAKg4CABB0EACABAAgAQAIAEACAEQAqABBwRB0EAcPWvWaGgixP58z77KEGxeek+i0cT+afQoSqysuHUlGLZmGiqQ6VrJv8bPJFM6EyRBsd72GINa0+aGm4aM3C5vvJ1Zz7PTW7V1fX8/LEZROppTQk0+jxHJhmmomGWjqYXbSKroSOcxrh5zQAbb7AWvclLp1owrXWilxT5MhKN0Z2QtZMryid8avzU9PFVyAsL5mtjYWgkDA52Ig8eaMv7FGeJjVm6UeFtX9jS2ZhIVaj3ivZX+qOlHrVXtADap4A4BsX0pawtHu+pvdiod319xzda9IuIaKqUkkAANizJ/hXJ0KEIuUo6LXmceDoJXyr6+5O09pfSlJKI31Ul3Ma8G0RGYzHk8DcKtgtziINuCTT1V/6/OqYijRw9WN1H19zm/a7SHrcnuxfSrnZaPd9SbwlHu+oh1v0j63J7sX0rvZaPd9SDwtHu+o064aR9bk92L6V3stHu+vuLeGpd31G/bHSPrcnuxfSjslHu+ot4en09RPtlpL1uT3YfpXeyUO76+4t0afQQ65aS9ck9yH6V3sdDu+vuRdKHQYdc9JeuS+7D9KOx0O76+5B04dBPtnpP1yT3IfpXex0O76+5Bwj0EOuuk/XJPch+lS7FQ7nr7imkNOuuk/XJfdh+ld7FQ7nr7i2dGPWasNG+odpctqGyBjKTZwmR7btu8m2QsSd3m9aS8LS3qgqWnW7Ft+JyjrtpT12X3IfpT+w4fuevuLc5dRPtvpT12X3IPoXew4fuevuLdSXUQ68aU9dl9yD6F3sOH7nr7kXVn1E+3GlPXZfcg+hHYcP3F9fcg61Tr6CfbnSnrsvuQfQu9gw/c9fcjv6nUPtzpT12X3IfpXOw4fuevuc39TqaLyT6bqauOqNTM6YxyRBhcGDCC1xPkgdCydpUadKUVBWui3hpymnmL6swsggDga2azxUEedpJ3g7KG9r/vu6Gj48E+hQlVfgNpUnUfgZ26jxxnSekjJMagllNDGS10shBw85v8AlsbnZu/LjudoqVnuqWluL/OI9rXJHlxJjNMkSwxaUa6CrgEclPXMa0yx3za2djfLYcwR1m4B5yhutG6OqfFe357CZU76xPLT2lpdG1choZ4nRVTNu6JpE8MUsgOJzRuBucQ6Q4XBFlOjTjWgt4tVpfhdIXbQmaiaklxbU1TeIdHGRax34nDp6uHyVi8bf/50+HNi8p2eVNgFJTgCwFSP/FIl7P8A3vy+6NbZP/pLy+6KDojRhqZBE2SONx8naYgHdQsN/UrOMxfZoqWVtP8Apefn5GtXrKlHM02XLQmp7aeZk0kolMfODGsLW4+BuTw3rz2M206tPIll+d/sufsZtbGupFxStc6OsuiGVrGAv2b43Etfhxc0jNpz3bis/BbW7LNy4p/n/Pn1E0KkqTutblI03qu6lZtHTwuYTZo57XuPQBbNek2ftqOMnkjB+ad0vF3sXqeJ3jy2Z66g6OjnrDtmMfDDDJI8SAOZfJoxA795PctLGTlCn+ni2Kxk3Cn+l6tk3Q1bQPqo6RlBBJBK8x7eYY6hxIP4gJ8gX80bh0bkurCqoObm01yXATVhVUHNzd+nI8tXdBQnTM1O5rZIKY1D8MgxNLGkNaHX32L2+6pVq0lh1NaN2I1aktypcG7HP0tpKjLJKakoonYnBsdU7Ooe/GOc3LIO3AX3HuTadOomp1Jvy5EVCa/VKXyO1V6CNCI4YdHf8QqXMa+aeeCSenY4/wCnG3ycuns7q8a+9vKU8i5JOz+YjPn1bsjm66aLhaaIRwx01bO21RTQkFkbnFoZkMmm5O7f12um4WpL9bbzRXBsISevNE7W+TR1BPgio4KidscYe2Uf+niaBcXYMnyOvck8MKhhlXrQvKbS8OL/ANC45muIutlPo6ifFOKRj6iohY9tGSW0sJ86V7Rv3hobkOaTvzRhZV6ycc1knx5vwF6s5WucFO6j0dVx08VJLUtlL4oQGRua3Dzw0doz6H5p2ElNVZ05SclHmyLI2tlHDTaP0Y0RMbUTRPqJpA0bQg2LWuO8jnn3UzCzlUrVG3onZC5oXX2hhphQU8cbGSto2SVDmtAdI99hd5G83Y/xXcDOVTPNu6vp4fl0LqJKyPPTNDFBoagcY4xU1c0szpcIMmwbiwtDrXw2dEbIpVJTxU1f9MVa3K/5chNJQR1tM09Bo+j0e6WkjnrX0weYjzI3PeGl8s5Gbw03a1pyzPaEUpVq9SooytG/H7Lp4hJRildXZ66Wg0YKCi0lNRsillDw2jpvwIah9+aX23MAbiuPSAz3HlKWIdWdGM7pf5PVr/ZyagoqbXyOfpUU1VoV1aKKmo546tsLDTNEbZW829wN+Tnb+LE2lvKeK3WdyTV9eX59yE8sqWa1ncoy0yoavyI/5Vb/ANSH/tcsLa/7oeRfwnB+Zpqxy2V/W7WiOhjsLSVDx+HHfID039Dfn4kWKGHdV+BYw+HlVfgZ02hqxOytrqOeqikOOS7SSWEWBwt8mwzDTYZDctDNTy7unJJovt08uSnJJo7dDVDRj2FrzUaIq3YopBz3U8vTYjJ7SDccbdIISJR3y10mvqVpR3q6TX1OFrBT0lMJoxJ/xCsqHYtuSS2GMuDmkEHnyuFr8LHoydYouc7O2WK5df8AQLNLW1kjvai6l2w1FS0X3sjI8nrPX8lVxWLzfohw9StUnd2RpDWgCwyAVAUUrlV/9rB/9kf+KRX9n/vfl90amyv/AEl5fdGaBxGYJBGYIyIPStSUVJOMldM22r6M0vQNfLLSRSS5vOIYt2JrTYOPXkV82246eGxMoQ4L2X/PXXUxa1KMKjjHgSmglwBuMxluyJXn8zlNKS+RHgtDMtN18s8z3S72OcwMHksDXEYQF9f2bhqOHw0FSWjSfndXNGlTjCCtz1LLqVTR/wCA0g+SVsAqMNG2Z98LXOYd/UdoFzFSe9gkr21t+eRTxcmqsEle2tvzyE0RoyPRjzWVc9PI6Jr/APDwU8u1fLIW2DtwsLE+N8rZlSpLELdwTV+LZCrUddZIJq/FsiavVoZS6WqpJGCeobs2NxAPL5XOL3NF7kXePdTK0LzpwS0X2/4crRvKEEtEVvRc7YqiCRwuyKaGRwG/CyRrjbuCt1IuUGlzTJTV4tF01j0dVVNRJPS6QiNLNhc29c+FsfMALSy9huvl05hUKFSnTgoTg8y/jcpwlGKs1r5HA1do2M0tAx88MjIpdo+dr/wi5jMeTnWvzwBfirNeTeHbSauuHMlN3gRK2RtXpN5c5uznrLFziA3ZbQNuScrYAEyKdKhZcUvr/wBIWtE9OUKuFRpKdzC1zGCOGNwcC0hrBfPdbEXIwNPJQV+eolE7X58clRRUcMjHRU9PBAHtc0sa57g0nEDbcGEpeBUownUktW2/6IHhyg10Umk2AEPp6ZtNDzCHtMbTjeBbf5RHcpYKnJYd9ZXYuT1OvrloaOprXV0tdSM0e6OIhzZcc+BrBeOOMA4nE3It6W42sU4Su6dLdRg8+vLTzbITV3dvQ5+v08NTXUNLE6MU0UVPCCHtLIxI8BwLgbc1gZxTMFGVOjOpL9zbf9f7F1bOSRzOUzSDZ9IzGMh7IY4oWFpDmuDWYjYj957h3J+z6bhQV+L1IVpXkyRykTxh1DSRPZIyiomMxMc17cbrBwuONo2nvUNnRladSSs5S/PU5Xauorkg1nnZHonRVJG9jnOElVMGPa7C92Ya6xyP4rh/CjDRcsTVqNeC/PkRqu1OMV5lOWgVjWORD/Krf+pD/wBrlhbX/fDyL2E/a/M0xY5cPn6tqHzSPklcXyPN3OdmSfyHVwXoIpRVkeoVNQWWKskXDVvT0lRG2kfUPgqm5UlTiNnnhBMDk/oBN/HyqdaioPOldc190ZuIw6g86V1zX3RB0rrVVmOooqiGB0r3bORwjGPGCBezea52Qs4bslOGHppqpFuxyOHgmqkW7Hd1I1MwYaiobz97GHMM6/aVXE4rP+mPD1/0U69fPpHh6mgtaALDIBUiqKg6UnlXcBSwEkAf4kb8v9KRX9n/APo/L7o1dkq9WXl90Zc6du7G29r+UL26VreBu25HXk1ulZTxU9Ps4dmzCZcTXyOdcklvBuZPX1rBewYVK8q9b9Tbdl4XbX4reZQlgpSlKUtbvgRdD611VMedI2ojuSWTvx5neWvviafh1KeL2Dh8Qv25X4L7e1r8zk8G5creXsRK+uZLNLK2zGyyPkDC8OwlxuRfjmStXBUKlGhGnPVxVvly+g2nTnGKT5HRl0/GdHxUTQAWzumkfjbZ98WEAdQLfdU1Qe+dR9LCXh5b51H0scbas9JviFYsyTTEMrfSb4hFmKaY0yt9JviF2zEyTGl7elviF3UWxrpG+k3xC7Zi2MdI3pHiEWYqQwyN6R4hTVxDG429LfELuotiGVvpN8Qu2YmR5mRvS3xClZiGJtG+k3xC7ZkGG0b6TfEIsyDaG429LfEIsyDaG429I8Qu2ZDQNo3pHiEWZw1nkQcDFW2IP4kO72XLB2v++HkX8J+1+Zpqxy2fPS9CeukhWsJIDQS4kAAXJJ4W61x2S1Ezsldmkalan4LVFQLyHNoOeG/zPX/ZysRid5+mPD1MLE4nePLHh6l8AsqhUBAAgCLpWvbTQvmeCWxi5Dc3HO1gpwg5yyolGLk7Irf3h0foz+4P1VjsVTwGbmQv3hUfoz+4P1XexVPAjupCfeHR+jP7g/VHYangccGhfvDo/Rn9wfqu9hqeBGwn3h0foz+4P1XewVfA4TNE65U1TO2CNsoe4OIL2gNyG690uphJ045nY5csV1VOggBLoALoALoALoALoAW6AEugCsVGu8DHuZs5Tgc5pIw2NjvGavRwE2k7rUpPHQvZJs8/t3D+xm//AB+ql8On1RD4hHusX7dQ/sZvFn6o+Hz6o58Rj3WOGvEP7GXxZ+q58Pn1Rz4lHusBrvF+xl8WfquPAzXNB8Sj3We1NrfHI9jBDLd7g0eTlc70uWElFN3JQ2hGUlFRepZLKqaB8+MYXENaC5zjYAC5J6AvQXSV2ewm1FNvRI0zUzVEQgTTgGUjIbwwdA6+tZOJxLqaLh6nnMXi3WeWOkfUuwCqlIVAAgAQBT+UiswwRwg5yPxEfut/qr2BheTkWsLG8mzLwbEt6N3YtKw+SsPuuCWhq6iDEUiDBTuLZ0tBTGN+3bvY5pb12OaVUjeOTqQNopZxJGyRu57Q4d4WBKOVtMkeq4AIAEACABACIAEAQdN1mwp5JOIbZvtHIJ1CnvKiiV8VV3VJyMorBZwPpbz1r0EUmvI8/SfIaF0Yx4XLkGh4Q2R1HBKkCbLBqXS7SqxHdC0u6sRyCo4uVoW6l7AQzVb9DQVmG2U7VHU8U/4swDpj3hnUP1VnEYh1NFwLuMxkq7stIrl18WXAKsUgQcFQAIOggDLNeqza1r2jyYWiMdu8/ErYwcMtNPqaeHjlh5lTrm2IcOwq0zs0I11xdRZXkKhEGAUhbPKd9hbiUxIWztUMWGJo6rnvS5PUgzQ9Q67HTmInnQm38BzH5rJxtPLO/UIssypkgQAIAEACABBwEHSp6+1lmRwjzjjd2Dd8VpbOp3bmZG1KtoqC56lOq48TCOIFwtSL1MmLsyDTvuLcQpNFhO57BQBnoEC2BdbNLkD0NA1HpMFLtD5Uzi7uGQWRi5XqW6G3s+FqWbqWJVS8IgAQAIAEAKgDyqphGx7zuY1zj3C67FXaR2Ku7GK1M5ke+Q73uc895ut+McsbGxayt0PGZmJpHgpEJ8DmQvsbH+yuFWS1JK4QYhKkhTPCFuORo6T8E16IWyyhJInV1Or9jVtB8mX8N3AAncfFV8XTzU/FEU7M0xYwwEACABAAgAQAIAzLWau21W8+aw7NvY3f8brfwtPJSXjqeYx1XeVn4aERNK5yZW4Hntv3Jy1QyMtCSw3zS7DbnoFwixsbDI9rBmXODR2kpc3lTZFLNJRRr9JAI42RjcxrWjuCwJSzNs9PCOWKiuR6qJIRB0EACABAAEAV/Xms2VE8A2dKRGO/M/AKzhIZqi8Cxho5qi8DLbLZNJihBBnLrYsLz0HNdRXnxHQPuOsKLQliVDuHipxQtknQ8V3l3oj4rsmLO0EoWzyxEOuN4Nx2jcpWT4i2a1oisE8Eco85ov7QyPxWDVhkm4jk7omJZ0EAKgBCgAQBD0xV7Gnlk9Fht7RyHxKbRhnqKImvU3dNyMoFybneTcnrXo+Csjyurd2S0o6yFpKPc7uKZBkoPkeNM7gpSQy57yOsOsqNgkztajUO0qg8jmwtL/4jk1UcdPLTt1LWz6eerfoaWsY3gQdEQABAAgBUAAQBnfKRW4pooQf8the72nbvgFp4GFouXU0cHC0XLqU9Xy0OagWyNpCO7b9HyQJmjnCTDn0KViuwx4s+lSSsKZ3NEx2jvxcbqEuJBk9QFs8H+UVNcBci7cn1fdskBObTtGdh3j5LNx9OzUyVN8i4rOGggBUHBEHQQBU9f6u0ccQPluxO9lv9StHZ0Lycuhl7TqWiodSkx7wtZmISQlgxJ2YmkLqepxOzOSMu5PWo3xHMlxZrrViLZpGoNFgpjId8zr/wDIfmsHH1M1S3Q3dnU8tPN1LOqJoAgBEAAQAIAVAAUAY3p+s29VNKM2ueQ32W5D5LdoRy00japQywSOemkmKCgWxXNuCOlAmRXaw2Jb0b02JWkJSPzDek5dqm+otlviZZoHQAq1yDPRApnlNvU48Bcifq/W7Cpik82+F/snIpWIhng4kIytI1cLALQIAEHAQdBAGZ611e1q5eiO0Y7t58VvYOGSkvHU87jZ56r8NDlRbwrLKfMkpbBjggVI4+khheQOOasUxua8bHlRtLntaN73NYO0my7UaSb6EYpykkuZttDTiKKOMZBjWt8BmvKzlmk5dT1sIKMVFcj3USYIARAAEACDgqDpztYq3YUs0l7EMIb7Tsh8Sm0YZ6iQ2hDPUSMcC3TaYIIMVqBTFe6wXUhbOBpNln4uDvmmIRNC6KixSjobzl18BBaon3CRYgz0XBTPOcblOJBjAp2EPmajqpXbaljJN3MGzfffdvHwssHFU8lRotU5XiddVyYIAEARtI1IihkkPmMJHbbL4qdOGeaj1F1Z5IOXQyVziSSTcm5JO+5XpErHmZO46HeuMXzJKgDAmy6kKm7HN0my4DuIyKdAhTlrY6WodDta1hIu2EGQ9vm/FVtoVMlFrroaWz6Wev5amsLzx6QVAAgAQAiABACoApfKVX4YooAc5HF7h+63d8VewMLycuhfwFO7c+hn4WoaDEXBbHNXRbPGZ1z2JkULZDr48UZ6RmpXEz4DtAxZOf05BRkxNjrRusVGwuRLalsSxk43KUSEjyCYIky2agVuCZ8J3SjEPbb/RZ+0Kd4qfQnQlZ2L6sktAgAQBV9fKzDA2IHnSuuR+63+tlf2fTvPN0M/aFS0MvUoa2DFZ6Q71xi1xJAUQZ5SOvl0KSK1R6nlIzE0jpClwFp2dy5cmuj8FO+Zw50ryB04G5fNZO0quaaiuSPT7Lp2pufeLgs01AQAIAVACIAVAAgDKte6wS1rgN0LRGO3e74rYwcMtPzNnBwy0r9SvhWRzFCBbEkfYdakkQkR7pgpiht8t98rdqHwFs6tZod9EWwvsThD7jdzuCRCqqqzIr3TRHTELkSKd/BRkhLHzbkR4kJHi1MESJFDUmKVkjd7Hh3dfMKFSCnFxfMgnZpmuwSh7Gvbuc0OHYQvOyTi7Mvp3Vz0XDoIAzjXOs2lU4A82IBg7d5+K28FTyUr9TDx089Sy5HCKtooyPWm3okyKPaR1h1qMULm7EdTKzHsaSQBvJAHaVxtLiLabdlzNW0fTCKKOMeY0Dv4rzlSeeTl1PcUae7pxh0RIUBoIAEAKgBCgBUAeVVMI2PedzGuce4XXYq7SOxWZpGJTTmRznu8p7nPPaTdegSUUkuR6LKopJchgQLYoQQZGlfcpqViEkNaVISzs6p0W3rIWea120d7Lc1XxU8lNsRVdol25RaHFFHOBnG7C72XcT3/NZ2AnaTj1K0HyKCtZHZChdYiRIc67VBcSDPIKYiQ4IYmRomo1btKXZk86Fxb14TmD81i46GWpdcy5h5XjboWNUx541tSIo3yO3MaXHuCnCLnJRXMjOSjFyfIySR5c5zjvcS49pK9ElZJI85JttsapCWe1PxXJEUNkfcoQqbuNXSvLidrVKk2tUy45sd5D0XG5VcZUyUn46F3ZtLeYhdFqaOsI9aCABAAgBUAIgBQgCt6+12yo3NHlTOEf8JzcfgrWEhmqeRbwVPPV8tTLlrm0wCBLGTvsO1SiiNiOEwhIUKQll85MKEl81QdwaIm9pzP5LL2jU0UCpXfIvWkqQTQyRO3PaR38D4rNpzcJKS5FYx2WIsc5p3tcWntBst+DvwJtjbKbYmQ4G1+hAtjguipChdESO/qZW7KqDSebMMB9rzSqWNp5qd1xQyhLLK3U0hYpfK1r3W4IGxA5zOzH7g3/kr2Ap5qmboUsbO0LdSgrYMZirotg1+8IYq4IFMUIFS4l51Eo8MT5iM5HYW+y3+qyNoVLyUOh6DY9HLB1Hz9EWhZ5sggAQAIAVADSEAKEAZ3ylVmKeKHhGwvOfnO4HuC08DG0XLqa+zoWg5dSnhXi8wQhTIsjrm6ZFEWIpIXIcF0SzYNSaLY0MQ86QbR3a7d8LLAxc81VmfVd5M7yrCzNdeqDZVWMDmzDF1YhkR+a2MFUzU7dDvIrqui5AhCmMgfwU2hUme4XBMj0Y4ggjIggjtCjJJ3Ft21NZ0XViaGOQee0E9TuI8V52pDJNxNSEs0Uyh661e0qi0HmxNDLfvbytjAwy0r9TKxs7zt0OCrZRYOdYLqFSYyA3uetSkJTPVRRBj2NJsBvJAHaUPRXFtNuy5mraNphFDHGMsDQD28fivN1Z55uXU9lQpqnTjDoiSoDgQAIAEAKgBEACAMZ07Wbeqnk4OkcADwDTYfJblGGSCR6OjT3dNLwIKYSPKd/DxTIohY8ApC2KF1CpEvR1MZpo4hvke1vcTn8FGpLJFy6CZOybNyhiDGtY3JrGhoHUBYLzbd3czG7j1wCu68aP21K5wHPhOMez5w8FbwdTJUtyYIzMFbXMjIcECWRr2PenchMiVG64ultCmeoXLipF01K0oGQTRuItCDI32TvHisvG0W5qS56FvD1UotPkU+eYve55zL3Fx7ytOKUYqKMyUszbGrolked/BNiivNj6fd3rkxa4HsFAgzs6q0u1qowRdrPxHdg3fGyq4yeWk/HQtbPpbyuk+WppKwj1YIAEACABACoAbxQBztZK7YUk0nENwt9p2Q+abRhnmkPw1PeVVEx2399a2j0LEe6wupJECI43TSLAIFNihdQpls5OaDaVm0PkwMLv4nZD81Sx9TLTy9SpiHaPmaosUoiIAbJGHNLTucCD2ELqdncDHtI0ZgmkiPmOIHW3gfBegpzU4qRGR4BNEsivGZTIsTIdA+x6ihoSyY1LYuRHragsw2JFznbK4UkkyKRIB49K4JkJK+w6yiKEzdiMmlWRIgGXeoSOcj3CiQZd9Q6O0ckx3vOBvY3f8Vk7QqXkodDc2RStB1Hz0LUs42AQAIAEACAFQcEQdKVymVlo4YQc3uMjh0tbkPiVfwMLtyNTZlO8pT6GfrRZqSPCofwTIo5Y8gpsXIVcFMcFJCmjTuTOjwUr5SM5pDb2G5D81jbQnepl6GdiZXlYuCoFcEACAKFyh0OGSOcDJ4wPP7w3fBamAqXTgyMipBaIpkebeUyPARMYFISyVTyXFuIUJIUzn1r8Tz1ZKSJJaE6hkuz2clFoRUVhsj7lTirFSbuIuiJEqAZKEjnI9QOjeoi2aroel2NPFHxawX9o5ledrTz1HI9dhqW6pRh0RMSh4IAEACAEugBxQAiAMn12rdtWyC/NitG0dBA53xWvhYZaa8T0WBp5KK6vU4EjrBWkixa5DKYdYq6V5DggUx7Wk5DMnIDpK7fQWzcNB0QgpoYvQjaD7Vrn43XnKs883LqZFSWaTZNSyAIAEAcrWah29LKweUBjZ7Tc0/D1MlRM4zKQt+4lnhPv7kyPARIYF1CZBI/A0u6F21xRAY++fSiwzke9PPhdh9JFuZXq8CYF0pMFwTImQeSFCRy2h19XKXa1UTSLgOxu7G5qriqmWk2WMHS3leK5LU05YB6kEACABACFAAgB6AI1dUCKKSQ5CNjnHuC7FZpJE4Rc5KK5mJzzF73Pdm57i53aSt5KySXI9UoqMcq5EKZ9z2JiR2wxSQuQoXRMhzUCmdvVGi21dAw7mu2juxmfzVfE1MtKX9FSvLLBmzFYJliIAEAIUACAMo1koNhVSstZpONnsuz+d1v4apvKSfMTJWONUcFaiInxPNq6hMiJpOTmhvSfgmRFJECGXDe+781Jq4NhjN79GaFwFS1O3E/EAekKBTmrD1wRImw7glyB8C7ahUeUkxG84G9gzKydoVNVD5mxsqlpKp8i3LNNcEACDoIARAAgByAKvyh1mzoywGzpntZbpbvcrWDjepfoaGzaeatfoZXM6w7Vro9BYigphxjkIVIULomQ4IFsvvJZR3fPOfNDYm9pzJ+SzNoT0UfmZuMla0TQyswoggAQAIARAFQ5QqK8cc4GbDgd7J3fFaGAqWbj1F1EZ/UDctiJWmeYUxDORXyXeerJMiRtocyokubdHzTox0uJkyRTSXHWFBoje52NGPu0t6M+5LZXrLW5NXCtInQ7h4DtSZHbaGqaDo9jTxR7iGgu9o5n5rztepnqOR6fDUt1SjEnpQ4EACDoiABAAgBxQBmvKVW4qmOK/NijxHqe4/pZamChaDl1N/ZdO1Nz6so0z7lXompYYFMXIchCZChdFSHXQhTNh1FodjQxX8qS8runnbvhZYWLnnqvw0MfESzVGd9VhAIAEACAEQBF0nSCaGSI+e0gdvD4qdKeSal0ONXRjtSwi7Tva4tPUQbFeki76lORGlfhaT0BMQllenlsCeJT4og+BBCaIke0T8JuoNC+B1qGWzgeByS2jlRZonZsllJnf1co9rUxMtdoON3stzVPFVMlNstYWnvKsV8zUV589KCDgIAEAIg6CABACuNszuAugEYdp+u21RNJ+0kd7oyHwC3aUMsEj2FCnu6cY9EcolOQxihSFyHAIEyFC6JkStG0plmiiG+SRje6+fwUZyywcugmpLLFy6G7xsDWhoyDQAOwBecbvqYL1FXABAAgAQAiABAGZa80GyqnOA5swxjov53xW3gamanbpoVqqsymaVls0D0vktCC1KzK9M+56uCtpCpDQuipDwFwWyVSyWy8FCSIoslK/E0Hx7UllOcbSNC5P6TKWY9Ubfm78li7RnqofM2NmU9HP5FxWYaoIAEACABB0RAAgDla2V2wop5OOAtHa7L806hDNUSLWCpbyvGPiYg511uI9c0ISu3FMUFdFsW66KY4Lt7cRMnYt3JtR7SsLyLiCMu6sTsh+apY6dqdurKGNlaFupqixjKBAAgAQAIAEACAK1r5Q7SlLwLuhOL+E5OVzBVMtS3UXVV4mJaaqLusOAsvSUlzKLOYE64toeAuXFSQ9oXLi2j0aEXFs7uh5rgg7/zSKmgmquZtur9HsaaJnHDid7TsyvMYieeo2ehw1Ld0oxOikjwQAiDoqABAAg4CAOJrZoF1dEyITGFofidZuLFlkN6fQrbqWa1y7g8UsPJyy30Kr91//wAs/wC0P1Vnt/8AEv8Axj+H1E+68+tn/aH6rvb/AAIva1/8PqH3Xn1v+SP1XfiH8SD2nf8Ax+ofdefXP5P9UfEP4kHtG/8Aj9R7eTIj/mz/ALQ/VHxD+JHt/wDEs2qmrYoGSDabV0jgS7Dgs0Cwb81VxGIdZp2tYq167qu/A7qriAQAIAEACABAAgBk8IexzDue0tPYRZdi7O6OGXy8kTnEk12ZJ/0Buvl5y2FtZJWyfUrvD+I0cj7vXv5A+pd+LLufUj2XxHDkhd69/IH1LnxZd36keyeI4ckbvXf5A/VHxX+P1Odj8T0byTkf85/JH6rnxVd36kXgf5EvR3JoYpo5DVY2se1zmbIDEAfJvfJRntPNFpR+oRwKvq7mhLJNAEACABAAgAQAIAEAKgAQAIAEHAQdBAAgBEACABAAgAQAIAEAKgAQAIAEACABBwEHREACDgIAEHQQAIAEANQB/9k="
                  alt="NearLaw Logo"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {" "}
                  Nearlaw – Cross-Platform Mobile Application (Android & iOS) |
                  Aug 2025{" "}
                </h3>
                <p className="text-sm text-gray-600">NearLaw</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              {" "}
              Key Responsibilities:{" "}
            </h4>
            <ul className="list-disc pl-6 mb-4">
              <li>
                {" "}
                Developed cross-platform application using React Native + Expo
                serving 1000+ legal professionals across Android and iOS.{" "}
              </li>
              <li>
                {" "}
                Integrated Elasticsearch managing 100k+ documents with advanced
                search and filtering capabilities.{" "}
              </li>
              <li>
                {" "}
                Built 10+ advanced user features including bookmarking,
                annotations, and content highlighting functionality.{" "}
              </li>
              <li>Built a user friendly responsive UI design.</li>
              <li>
                {" "}
                Took responsibility of building and deploying the app on
                playstore.{" "}
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
                {" "}
                React Native + Expo{" "}
              </span>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
                {" "}
                TypeScript{" "}
              </span>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
                {" "}
                Tailwind CSS{" "}
              </span>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
                {" "}
                Redux{" "}
              </span>
            </div>
          </motion.div>
          {/* eBook */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full flex justify-center items-center mr-4">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="NearLaw Logo"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {" "}
                  ALL MR eBook - Android Mobile Application | Aug 2025{" "}
                </h3>
                <p className="text-sm text-gray-600">NearLaw</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-2">
              {" "}
              Key Responsibilities:{" "}
            </h4>
            <ul className="list-disc pl-6 mb-4">
              <li>
                {" "}
                Developed an Android mobile application using Flutter and Dart
                to provide book content in digital format with a clean and
                user-friendly interface.{" "}
              </li>
              <li>
                {" "}
                Implemented index-based search functionality to allow users to
                quickly find relevant content across multiple books.{" "}
              </li>
              <li>
                {" "}
                Built a PDF download feature, enabling users to export and
                access selected content offline.{" "}
              </li>
              <li>
                {" "}
                Integrated APIs to fetch and render dynamic book data
                efficiently within the app.{" "}
              </li>
              <li>
                {" "}
                Optimized UI performance and ensured smooth navigation for an
                improved reading experience.{" "}
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
                {" "}
                Dart{" "}
              </span>
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm">
                {" "}
                Flutter{" "}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
