'use client'
import { TableContainer, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/table';
import { BoosterDiameterDocument, BoosterDiameterQuery } from "@/lib/gql/graphql";
import { useQuery } from 'urql';

export default function SearchRockets() {
    const [result] = useQuery({
        query: BoosterDiameterDocument,
        variables: {limit: 4}
    });
    const { data, fetching, error } = result;

    if (fetching) return <div>fetching query</div>
    if (error) return <div>Error...{error.message}</div>
    console.log(data); //I'm able to successfully see the data here, but I'm struggling to get that data into a table below.
    return (
        <div>
            <TableContainer>
                <Table variant='striped'>
                    <Thead>
                        <Tr>
                            <Th>Rocket ID</Th>
                            <Th>Number of Boosters</Th>
                            <Th>Diameter</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.rockets?.map((rockets) => (
                            <Tr key={rockets?.id}>
                                <Td>{rockets?.id}</Td>
                                <Td>{rockets?.boosters}</Td>
                                <Td>{rockets?.diameter?.meters}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};