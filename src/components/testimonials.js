import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import "./testimonial.css"

const REC = [
  {
    name: "Fabio Gutierrez",
    title: "Cloud Architect",
    review: `It has been my distinct privilege to have Nouman on my development team
        for the past 3 years. Whenever starting a new project with new
        developers it is sometimes difficult to communicate technical
        requirements in addition to conveying an understanding of the overall
        business requirements to provide context for the development effort.
        Nouman has always been able to see the "forest for the trees" which
        has allowed him to make significant contributions to software and
        platform architecture and not just pieces of individual code. He picks
        up new technologies and frameworks with ease and never hesitates to
        mentor other team members on this new knowledge. On our team he has
        also put in herculean efforts of extra time when faced with
        unreasonable deadlines while at the same time keeping a very sunny
        disposition about it all. In my honest opinion any development team
        would be made better by having Nouman as a member.`,
    imageAlias: "fb",
  },
  {
    name: "Cheyenne Christman",
    title: "Senior Software Engineer",
    review: `  Nouman and I worked together as software developers on Presidio's
        Cloud Concierge application. He is highly proficient in several
        technologies such as JaveScript, React, Redux, NodeJS and MongoDB. I
        thoroughly enjoyed my time working with Nouman because he was
        productive, reliable and responsible for whatever task he was working
        for. He is a dedicated professional and incredibly hard-working with
        great personality. He is a truly valuable asset to any team and you
        won't regret to have him on your team.`,
    imageAlias: "cc",
  },
  {
    name: "Ayesha Sagheer",
    title: "Lead QA Engineer",
    review: `It’s rare that you come across standout talent like Nouman. I had the
        pleasure of working with Nouman for three years at NMX Global
        Software, collaborating on several projects including Orion and Cloud
        Concierge. I was particularly impressed by Nouman's quality of code,
        as a QA personal it was very difficult for QA Team to find bugs in his
        area of development. He got marvelous problem solving skills, it was
        always easy to make him understand nature and severity of any issue
        and he always provided quick fixes with almost no ripples. Other than
        that, he has excellent communication and collaboration skills. In
        addition, he is a perfect combination of smart and hard worker and is
        a great team player. He is a great person to work with who is always
        available, highly committed and humble. Nouman would be a true asset
        for any positions requiring a full stack developer with passion for
        JavaScript, Node.js and new technologies based on them and comes with
        my heartfelt recommendation.`,
    imageAlias: "as",
  },
  {
    name: "Sohail Bhamani",
    title: "Senior IT Professional",
    review: `Nouman is simply put, a rock star! He is a consummate software professional
    with a personable disposition that is constantly going
        above and beyond what is asked of him. He can work in all phases of
        the software development life cycle including architectural tasks,
        development tasks, and assisting with quality assurance tasks all the
        while keeping a positive and cheerful attitude. Being offshore to the
        US, Nouman had to juggle a large time zone differential and not once
        did he ever complain about having to shift times to coordinate with
        the onshore team. Being extremely knowledgeable, a team player, and a
        all around good guy really made it an absolute pleasure managing
        Nouman!`,
    imageAlias: "sb",
  },
]

export default function(props) {
  const data = useStaticQuery(graphql`
    query {
      sb: file(absolutePath: { regex: "/sb.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fb: file(absolutePath: { regex: "/fb.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cc: file(absolutePath: { regex: "/cc.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      as: file(absolutePath: { regex: "/placeholder-person.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [reviewState, setReviewState] = useState([false, false, false, false])

  const toggleReview = index => {
    const temp = [...reviewState]
    temp[index] = !temp[index]
    setReviewState(temp)
  }

  return (
    <div className="testimonial-wrapper">
      {REC.map((rec, index) => (
        <div className="testimonial-wrapper-item">
          <div className="testimonial-item">
            <div className="testimonial-img">
              {data[rec.imageAlias] && (
                <Image
                  fixed={data[rec.imageAlias].childImageSharp.fixed}
                  alt={""}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
              )}
            </div>
            <h4 className="testimonial-title">{rec.name}</h4>{" "}
            <span className="testimonial-subtitle">{rec.title}</span>
            <div className="testimonial-content">
              <p>
                {!reviewState[index]
                  ? rec.review.split("\n").slice(0, 3)
                  : rec.review}
                {!reviewState[index] ? (
                  <>
                    <span> ... </span>
                    <a
                      onClick={e => {
                        toggleReview(index)
                      }}
                      className="testimonial-link"
                    >
                      See More
                    </a>
                  </>
                ) : (
                  <a
                    onClick={e => {
                      toggleReview(index)
                    }}
                    className="testimonial-link"
                  >
                    {" "}
                    See Less
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
