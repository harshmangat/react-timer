import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  const [secondsIntervalId, setSecondsIntervalId] = React.useState(null);
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(0);

  React.useEffect(() => {
    if (seconds === 60) {
      setMinutes((mins) => {
        return mins + 1;
      });
      setSeconds(0);
    }
    if (minutes === 60) {
      setHours((hrs) => {
        return hrs + 1;
      });
      setMinutes(0);
    }
  }, [seconds, minutes, hours]);

  const secondsIntervalHandler = () => {
    setSeconds((oldVal) => {
      return oldVal + 1;
    });
  };

  const startHandler = () => {
    const intervalId = setInterval(secondsIntervalHandler, 1000);

    setSecondsIntervalId(intervalId);
  };

  const stopHandler = () => {
    if (secondsIntervalId) {
      clearInterval(secondsIntervalId);
    }
  };

  const resetHandler = () => {
    setHours(0);
    setSeconds(0);
    setMinutes(0);
    stopHandler();
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor="#efefef"
    >
      <Box
        flexDir="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="375px"
        w="500px"
        bgColor={"teal"}
        borderRadius={12}
        boxShadow="0 5px 5px 2px rgba(0 , 0 ,0 , 0.6)"
      >
        <Text color="#fff"
          fontSize="24px"
          fontWeight="bold"
          letterSpacing="2px" m="0" p="0" pos="relative" top="-30px">Timer</Text>
        <Text
          color="#fff"
          fontSize="42px"
          fontWeight="bold"
          letterSpacing="2px"
        >
          {hours || "00"}:{minutes || "00"}:{seconds || "00"}
        </Text>
        <Box mt="24px" display="flex" gap="12px">
          <Button p="5px 15px" border="none" borderRadius="5px" onClick={startHandler}>Start</Button>
          <Button  p="5px 15px" border="none" borderRadius="5px" onClick={stopHandler}>Stop</Button>
          <Button  p="5px 15px" border="none" borderRadius="5px" onClick={resetHandler}>Reset</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
