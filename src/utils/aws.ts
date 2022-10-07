import AWS from "aws-sdk";

const s3 = new AWS.S3();

export const getSignedUrl = async (key: string) => {
  const url = await s3.getSignedUrlPromise("getObject", {
    Bucket: "simple-chat-room-bucket",
    Key: key,
  });

  return url;
};

export const getSignedPostUrl = async (
  key: string
): Promise<AWS.S3.PresignedPost> => {
  return new Promise((resolve, reject) => {
    s3.createPresignedPost(
      {
        Bucket: "simple-chat-room-bucket",
        Fields: {
          key,
        },
        Conditions: [["content-length-range", 0, 1000000]], // 1MB
        Expires: 60,
      },
      (error, signed) => {
        if (error) return reject(error);
        resolve(signed);
      }
    );
  });
};
