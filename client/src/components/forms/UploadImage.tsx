import imageCompression from "browser-image-compression";
import styled from "styled-components";

import { AddAPhoto, Clear } from "@material-ui/icons";

import { mainTheme } from "../../styled/config";
import { parseStyledBoolean } from "../../styled/booleanParser";
import { useEffect } from "react";

const AddAPhotoIconStyled = styled(AddAPhoto)<{ error?: string }>`
  transition: all 0.2s;
  ${(props) => (props.error ? `color: ${mainTheme.palette.error.main};` : ``)}
`;

const ButtonRemoveLogoStyled = styled.div<{ error?: string }>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${mainTheme.palette.secondary.main};
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const LogoContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  margin: 20px auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const LogoStyled = styled.div<{
  src?: string;
}>`
  height: 200px;
  width: auto;
  min-width: 200px;
  background-size: cover;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 5px;
  ${(props) =>
    props.src
      ? `background-image: url("${props.src}");`
      : `display: flex;
justify-content: center;
align-items: center;`}
`;

const TournamentCreateLogoTextFieldStyled = styled.input`
  display: none;
`;

export interface UploadImageProps {
  image: any;
  imageError?: string;
  imgUrl?: string;
  setImage: (file: any) => void;
  setImageError: (err: string | undefined) => void;
  setImageUrl: (file?: string) => void;
  handleRemoveImage: () => void;
}

const UploadImage: React.SFC<UploadImageProps> = ({
  image,
  imgUrl,
  imageError,
  setImage,
  setImageError,
  setImageUrl,
  handleRemoveImage,
}) => {
  const handleChangeImage = async (e: any) => {
    const imageFile = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1000,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      setImage(compressedFile);
      setImageError("File could not be uploaded!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUrl = () => {
      if (image) {
        return URL.createObjectURL(image);
      } else {
        return undefined;
      }
    };
    if (image) {
      setImageUrl(getUrl());
    }
  }, [image, setImageUrl]);

  return (
    <LogoContainerStyled>
      <TournamentCreateLogoTextFieldStyled
        type="file"
        name="file"
        id="file"
        onChange={handleChangeImage}
      />
      <label htmlFor="file">
        <LogoStyled src={imgUrl}>
          {imgUrl ? null : (
            <AddAPhotoIconStyled
              error={parseStyledBoolean(Boolean(imageError))}
            />
          )}
        </LogoStyled>
      </label>
      {imgUrl ? (
        <ButtonRemoveLogoStyled onClick={handleRemoveImage}>
          <Clear fontSize="small" />
        </ButtonRemoveLogoStyled>
      ) : null}
    </LogoContainerStyled>
  );
};

export default UploadImage;
