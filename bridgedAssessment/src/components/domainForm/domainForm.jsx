import React from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addDomain } from "../../redux/domainSlice";

const DomainForm = ({ onCancel }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.domains);

    const [form] = Form.useForm();
    const onFinish = (values) => {
        const newDomain = {
            createdDate: Math.floor(Date.now() / 1000),
            domain: values.domain,
            status: "pending",
            isActive: false,
        };
        dispatch(addDomain(newDomain))
            .then(() => {
                message.success(`Submitted domain: ${values.domain}`);
                form.resetFields();
                onCancel();
            })
            .catch((error) => {
                message.error(`Failed to add domain: ${error.message}`);
            });

    };


    return (
        <div className="h-full flex flex-col">
            <h3 className="text-3xl mb-10" style={{ fontWeight: '500' }}>Add domain</h3>
            <Form
                name="domainForm"
                onFinish={onFinish}
                layout="vertical"
                className="flex flex-col flex-grow p-6"
                form={form}
            >
                <Form.Item
                    name="domain"
                    className="flex-grow"
                    rules={[
                        { required: true, message: "Please enter a domain name!" },
                        {
                            pattern: /^https:\/\/([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/,
                            message: "Please enter a valid domain (eg:https://bridged.media)",
                        },
                    ]}
                >
                    <Input placeholder="Ex:https://bridged.media" style={{ padding: '15px' }} />
                </Form.Item>

                <div className="mt-auto flex justify-end space-x-4">
                    <Button onClick={onCancel} style={{ padding: '15px', width: '150px', height: '70px' }}>Cancel</Button>
                    <Button loading={loading} type="primary" htmlType="submit" style={{ padding: '15px', width: '150px', height: '70px' }}>
                        Add
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default DomainForm;
