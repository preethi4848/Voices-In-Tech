
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideInStyles = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s ease-out ${delay}s`
  });

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12" ref={ref}>
          <h2 
            className="text-3xl font-bold mb-4 relative inline-block"
            style={slideInStyles(0)}
          >
            About WeCoded
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-wecoded-green/70 rounded-full"></span>
          </h2>
          <p 
            className="text-muted-foreground"
            style={slideInStyles(0.1)}
          >
            Our annual celebration of diversity and inclusion in tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" ref={ref}>
            <p 
              className="text-lg"
              style={slideInStyles(0.2)}
            >
              WeCoded is an annual celebration that runs alongside International Women's Day (March 8), 
              providing a platform for underrepresented groups in tech to share their stories, experiences, and accomplishments.
            </p>
            <p 
              className="text-lg"
              style={slideInStyles(0.3)}
            >
              What began as SheCoded – highlighting women in tech – has evolved into WeCoded, embracing individuals from all underrepresented backgrounds in our industry.
            </p>
            <p 
              className="text-lg"
              style={slideInStyles(0.4)}
            >
              Each year, hundreds of developers share their journeys, challenges, and triumphs, creating a tapestry of experiences that inspire and connect the community.
            </p>
          </div>

          <div 
            className="bg-white p-8 rounded-lg shadow-md border border-slate-100 relative overflow-hidden group"
            ref={ref}
            style={slideInStyles(0.3)}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-wecoded-gradient opacity-20 rounded-bl-full transform transition-all duration-500 group-hover:scale-150"></div>
            
            <h3 className="text-xl font-semibold mb-6 relative">
              Key Highlights
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-wecoded-purple"></span>
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {[
                {
                  num: 1,
                  title: "Started in 2018",
                  desc: "Originally launched as SheCoded to celebrate women in tech"
                },
                {
                  num: 2,
                  title: "Thousands of Stories",
                  desc: "Developers worldwide have shared their unique journeys"
                },
                {
                  num: 3,
                  title: "Expanded Focus",
                  desc: "Evolved to include all underrepresented groups in tech"
                },
                {
                  num: 4,
                  title: "Community Celebration",
                  desc: "Fostering connection, inspiration and belonging in tech"
                }
              ].map((item, index) => (
                <li 
                  key={item.num}
                  className="flex gap-4 items-start transition-all duration-300 hover:translate-x-1"
                  style={{
                    ...slideInStyles(0.4 + index * 0.1)
                  }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-wecoded-blue to-wecoded-purple text-white shadow-sm">
                    <span className="font-bold">{item.num}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
