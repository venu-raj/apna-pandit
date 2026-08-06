import { CheckCircle2 } from "lucide-react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full py-2 overflow-hidden">
      <div className="absolute bottom-0 lg:bottom-0 inset-x-0 mx-auto rounded-full w-1/3 h-1/16 blur-3xl"></div>

      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-8 bg-accent-foreground/5 rounded-3xl">
          <div className="flex flex-col items-start justify-center w-full">
            <Container className="w-max mx-auto">
              <h2 className="text-3xl lg:text-5xl leading-tight text-primary font-semibold">
                Are you a qualified <br /> Pandit/Astrologer?
              </h2>
              <div className="text-sm font-medium mt-6">
                Start Your journey with us today
              </div>
            </Container>
          </div>
          <div className="flex flex-col justify-center w-full mt-8 lg:mt-0">
            <Container className="w-max mx-auto">
              <div className="flex size-20">
                <Image
                  src="/images/heart.svg"
                  alt="Heart"
                  width={1024}
                  height={1024}
                  className="object-cover size-full"
                />
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Button size="lg">Send a request</Button>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    4.80/5 <br /> From 300+ Customer Reviews
                  </span>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CTA;
