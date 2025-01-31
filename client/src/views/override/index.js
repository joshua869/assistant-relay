import React, {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom'
import isIP from 'is-ip';
import {Input, Button, InputNumber, message} from "antd";
import * as Styles from './styles';
import {Typography} from "antd";

const {Text, Title, Paragraph} = Typography;

function Override({setReload}){
    const [port, setPort] = useState();
    const [ip, setIp] = useState('127.0.0.1');

    useEffect(() => {
        localStorage.setItem('port', port);
        localStorage.setItem('ip', ip);

    },[port, ip]);

    function addIp(ip){
        if(isIP(ip)) {
            setIp(ip)
        }
        message.error("Not a valid IP address")
    }


    return (
        <Styles.Container>
            <div>
                <Title level={3}>Whoops! We lost your server connection</Title>
                <Paragraph>
                    Did you manually change your port or are you access this remotely?  Not to worry, add your server information below to continue
                </Paragraph>

                <Styles.Form>
                    <Text>IP Address:</Text>
                    <Input onChange={(e) => addIp(e)} defaultValue={ip} />

                    <Text>Port Number:</Text>
                    <InputNumber onChange={(e) => setPort(e) } defaultValue={port} />

                    <div></div>
                    <Button onClick={() => setReload()} type={"primary"}>
                        Save
                    </Button>
                </Styles.Form>
            </div>
        </Styles.Container>)
}

export default withRouter(Override);