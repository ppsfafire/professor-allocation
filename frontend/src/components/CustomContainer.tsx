import { Container } from "@chakra-ui/react";
import type { ContainerProps } from "@chakra-ui/react";

export default function CustomContainer(props: ContainerProps) {
  return (
    <Container maxW="1280px" px={4} {...props}>
      {props.children}
    </Container>
  );
} 