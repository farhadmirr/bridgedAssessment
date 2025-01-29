import React from "react";
import { Form, Input, Button, message } from "antd";

const DomainForm = ({onCancel}) => {
  const onFinish = (values) => {
    message.success(`Submitted domain: ${values.domain}`);
  };


  return (
    <div className="h-full flex flex-col">
    <h3 className="text-3xl mb-10" style={{fontWeight:'500'}}>Add domain</h3>
      <Form
        name="domainForm"
        onFinish={onFinish}
        layout="vertical"
        className="flex flex-col flex-grow p-6"
      >
        <Form.Item
          name="domain"
          className="flex-grow"
          rules={[
            { required: true, message: "Please enter a domain name!" },
            {
              pattern: /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/,
              message: "Please enter a valid domain (e.g., example.com)",
            },
          ]}
        >
          <Input placeholder="Ex:https://bridged.media" className="p-5" style={{padding:'15px'}} />
        </Form.Item>

        <div className="mt-auto flex justify-end space-x-4">
          <Button onClick={onCancel} style={{padding:'15px',width:'150px',height:'70px'}}>Cancel</Button>
          <Button type="primary" htmlType="submit" style={{padding:'15px',width:'150px',height:'70px'}}>
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default DomainForm;
