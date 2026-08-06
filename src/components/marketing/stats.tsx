import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { STATS } from "@/constants";

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden">
      <Wrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 place-items-center w-full">
          {STATS.map((stat, index) => (
            <Container key={index} delay={0.1 + index * 0.1}>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center px-4 lg:px-6 py-2 rounded-full relative before:absolute before:inset-0 before:-z-10 before:p-[1.5px] before:rounded-3xl before:bg-linear-to-r before:from-primary/30 before:to-primary/80 before:content-[''] after:absolute after:inset-[1.5px] after:-z-10 after:rounded-[22px] after:bg-primary/5">
                  <span className="text-3xl">{stat.icon}</span>
                </div>

                <div className="text-center">
                  <h4 className="text-lg lg:text-2xl text-transparent bg-linear-to-tl from-neutral-400 to-neutral-800 bg-clip-text font-semibold mt-5">
                    {stat.value}
                  </h4>

                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.title}
                  </p>
                </div>
              </div>
            </Container>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Stats;
