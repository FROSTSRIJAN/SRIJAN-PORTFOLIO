import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlowingBorder from "@/components/ui/glowing-border";

type LetsCollaborateButtonProps = {
  onClick?: () => void;
};

const LetsCollaborateButton = ({ onClick }: LetsCollaborateButtonProps) => {
  return (
    <GlowingBorder disabled={false} containerClassName="rounded-md">
      <Button
        size="lg"
        onClick={onClick}
        className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-[1.03]"
      >
        <Handshake className="mr-2 h-4 w-4" />
        Let&apos;s Collaborate
      </Button>
    </GlowingBorder>
  );
};

export default LetsCollaborateButton;
