import React from 'react';
import {Box, Text, Flex, Image, Button} from '@chakra-ui/react';

function NewsArticle({data}) {
  return (
      <Box bgColor="white" p="10px" borderRadius="15px" marginY={'10px'}>
        <Box marginBottom={'10px'} bgColor={'white'}>
        </Box>
        <Image borderRadius={'10px'} src={data.urlToImage} alt="images"/>
        <Text fontSize={'20px'}>{data.title}</Text>

        <Text color="gray">{data.content}</Text>
        <Flex justify="center">
          <Button size="sm" fontWeight="light">
            <a target="_blank" href={data.url} rel={'noreferrer'}>Read More</a>
          </Button>
        </Flex>
      </Box>
  );
}

export default NewsArticle;