import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
import * as S from "../Player/styles";

function Controls(props) {
    return (
        <S.Controles>
           
            <S.ButtonPlay onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} className='icone'/>
            </S.ButtonPlay>
          
        </S.Controles>
    )
}

export default Controls
