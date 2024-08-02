import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import BuyTab from './BuyTab'

const AllTabs = () => {
    return (
        <div>
            <Tabs>
                <TabList className='flex flex-wrap'>
                    <Tab>Buy</Tab>
                    <Tab>Rent</Tab>
                    <Tab>PG</Tab>
                    <Tab>Plot</Tab>
                    <Tab>Commercial</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <BuyTab />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>four!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>five!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default AllTabs
