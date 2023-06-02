'use client'
import { TableContainer, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/table';
import { BoosterDiameterDocument, /*BoosterDiameterQuery*/ } from "@/lib/gql/graphql";
import { useQuery } from 'urql';
/* import { graphql, DocumentType } from '@/lib/gql'; these imports are no necessary when fetching the data with the query directly here:

type BoosterDiameter = BoosterDiameterQuery; */

export default function SearchRockets() {
    const [result] = useQuery({
        query: BoosterDiameterDocument,
        variables: {limit: 4}
    });
/* This set of directions I had trouble getting to work and to get types to be imported in. I'm not sure if its my lack of knowledge with TypeScript or with the Codegen tool. In the end, I'm able to import the function graphql and get an autocomplete of my query, but not able to get the types imported or working to allow the query to go through. At this point I prefered a working demonstration over being able to do the full query.
    const query = (graphql('query BoosterDiameter($limit: Int) {
      rockets(limit: $limit) {
        id
       boosters
        company
        diameter {
          meters
        }
      }
    }')) */
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