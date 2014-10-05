scriptId = 'com.hackroo.controlhome'

-- we have to set an initial yaw

center = 0

-- and we have to reposition

function rerepresent(rad)
    -- radians come from -3.14 to 3.14,
    -- we want it from 0 to 6.28
    if rad < 0 then
        return -rad
    elseif rad > 0 then
        return (2 * math.pi) - rad
    else -- rad = 0
        return rad
    end
end

function reposition(y) -- y for yaw
    return rerepresent(y - center)
end

function onPoseEdge(pose, edge)
    myo.debug("onPoseEdge: " .. pose .. ", " .. edge)
    if (pose == 'waveOut') and (edge == 'on') then
        center = myo.getYaw()
    elseif (pose == 'waveIn') and (edge == 'on') then
        yaw = reposition(myo.getYaw())
        myo.debug(yaw)
        if (yaw >= math.pi) and (yaw <= ((2*math.pi)-0.5)) then
            myo.keyboard('1', 'press')
            myo.keyboard('return', 'press')
            -- actually, looks like these ranges are wrong...
        elseif (yaw > ((2*math.pi) - 0.5)) or (yaw < 1) then
            myo.keyboard('2', 'press')
            myo.keyboard('return', 'press')
        else
            myo.keyboard('3', 'press')
            myo.keyboard('return', 'press')
        end
    end
end

function onPeriodic()
end

function onForegroundWindowChange(app, title)
    myo.debug("onForegroundWindowChange: " .. app .. ", " .. title)
    return true
end

function activeAppName()
    return "Control Home"
end

function onActiveChange(isActive)
    myo.debug("onActiveChange")
end
