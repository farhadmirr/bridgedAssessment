import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchDomain, fetchDomains } from "../../api/api";
import { updateDomain } from "../../api/api";
const EditForm = ({ onCancel }) => {
    const dispatch = useDispatch();
    const editingItem = useSelector((state) => state.domains.editingItem);
    const { loading } = useSelector((state) => state.domains);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const newDomain = {
            domain: values.domain,
        };
        dispatch(updateDomain(({ id: editingItem.key, updatedData: newDomain })))
            .then(() => {
                message.success(`Edited domain: ${values.domain}`);
                form.resetFields();
                onCancel();
            })
            .catch((error) => {
                message.error(`Failed to add domain: ${error.message}`);
            });

    };
    useEffect(()=>{
        form.setFieldsValue(editingItem)
    },[editingItem])
    
    return (
        <div className="h-full flex flex-col">
            <h3 className="text-3xl mb-10" style={{ fontWeight: '500' }}>You are editing {editingItem.domain}</h3>
            <Form
                name="editForm"
                onFinish={onFinish}
                layout="vertical"
                className="flex flex-col flex-grow p-6"
                form={form}
                defaultValue={editingItem}
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
                    {/* <input value={"asdasd"} /> */}
                    <Input placeholder="Ex:https://bridged.media" style={{ padding: '15px' }} />
                </Form.Item>

                <div className="mt-auto flex justify-end space-x-4">
                    <Button onClick={() => { onCancel() }} style={{ padding: '15px', width: '150px', height: '70px' }}>Cancel</Button>
                    <Button loading={loading} type="primary" htmlType="submit" style={{ padding: '15px', width: '150px', height: '70px' }}>
                        Edit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default EditForm;
