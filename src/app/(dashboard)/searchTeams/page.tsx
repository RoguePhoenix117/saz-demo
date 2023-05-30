'use client'
import { TableContainer, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/table';
import { useEffect, useState } from 'react';

export default function SearchTeams() {
    const[playerData, setPlayerData] = useState([])

    useEffect(() => {
        fetch('https://www.balldontlie.io/api/v1/players?page=1')
        .then((response) => response.json())
        .then((data) => setPlayerData(data.data));
    }, [])

    return (
        <div>
            <TableContainer>
                <Table variant='striped'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Team</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {playerData?.map((player) => (
                            <Tr key={player.id}>
                                <Td>{player.first_name} {player.last_name}</Td>
                                <Td>{player.team.full_name}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};
  